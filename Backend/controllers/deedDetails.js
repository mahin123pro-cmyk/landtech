import { deedModel } from "../models/deedModel.js";

export const deedDetails=async(req,res)=>{
    
const {id}=req.params;

const originalDeedHash= await deedModel.findOne({deedId:id})

res.status(200).json({message:originalDeedHash})
}