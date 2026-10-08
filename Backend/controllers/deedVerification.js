import { deedModel } from "../models/deedModel.js"
import { generateHash } from "../utils/hash.js"
import crypto from "crypto"
export const deedverification=async(req,res)=>{
  const {deedId,ownerName,nid,khatianNo,dagNo,mouza,landArea,landUnit,registrationDate}=req.body
  





  const deedWithOwner={
      deedId:deedId,
  
      ownerName:ownerName,
      nid:nid,
      khatianNo:khatianNo,
      dagNo:dagNo,
      mouza:mouza,
      landArea:landArea,
      landUnit:landUnit,
      registrationDate:registrationDate
  }
  
  const deedWithoutOwner={
      deedId:deedId,
  
      khatianNo:khatianNo,
      dagNo:dagNo,
      mouza:mouza,
      landArea:landArea,
      landUnit:landUnit,
      registrationDate:registrationDate
  }
  
  
  
  const canonocalDataDeedWithOwner={
      deedId:deedWithOwner.deedId,
      ownerName:deedWithOwner.ownerName,
     nid:deedWithOwner.nid,
      khatianNo:deedWithOwner.khatianNo,
      dagNo:deedWithOwner.dagNo,
      mouza:deedWithOwner.mouza,
      landArea:Number(deedWithOwner.landArea),
      landUnit:deedWithOwner.landUnit,
      registrationDate:deedWithOwner.registrationDate
  }
  
  
  const canonocalDataDeedWithOutOwner={
    deedId:deedWithOwner.deedId,
      khatianNo:deedWithoutOwner.khatianNo,
      dagNo:deedWithoutOwner.dagNo,
      mouza:deedWithoutOwner.mouza,
      landArea:Number(deedWithoutOwner.landArea),
      landUnit:deedWithoutOwner.landUnit,
      registrationDate:deedWithoutOwner.registrationDate
  }
  
  console.log(deedId,ownerName,khatianNo,dagNo,mouza,landArea,landUnit,registrationDate)
  
  const deedHash=generateHash(canonocalDataDeedWithOutOwner)
  const  ownerWithDeedHash=generateHash(canonocalDataDeedWithOwner)
  

  

  




const originalDeedHash= await deedModel.findOne({deedId:deedId})
if(!originalDeedHash){
    return res.status(400).json({message:"This is doucment is not found"})
}


if(!(originalDeedHash.documentHash===deedHash)){
    return res.status(400).json({message:"This is a illagal documment"})
}

if(!(originalDeedHash.ownerWithDeedHash===ownerWithDeedHash)){
    return res.status(400).json({message:"Owner information does not match"})
}


res.status(200).json({message:originalDeedHash.deedId})

}