import { deedModel } from "../models/deedModel.js";
import crypto from "crypto"
import { generateHash } from "../utils/hash.js";

export const ownerShipTransferController=async(req,res)=>{

const {deedId,previousOwnerNid,newOwnerName,newOwnerNid,transferDate,transferReason,transferDocumentNo}=req.body;
console.log(deedId,previousOwnerNid,newOwnerName,newOwnerNid,transferDate,transferReason,transferDocumentNo)
const deed=await deedModel.findOne({deedId});

if(!deed){
  return res.status(400).json({message:"Deed not found"});
}

if(deed.currentOwner.nid!==previousOwnerNid){
  return res.status(400).json({message:"Previous owner does not match"});
}

const currentHistory=deed.ownershipHistory[deed.ownershipHistory.length-1];

if(currentHistory){
  currentHistory.toDate=transferDate
}

const transferId=`TR-${crypto.randomBytes(6).toString("hex").toUpperCase()}`

const transferData={
  deedId,
  previousOwnerNid,
  newOwnerName,
  newOwnerNid,
  transferDate,
  transferReason,
  transferDocumentNo,
  transferId
}

const transferHash=generateHash(transferData)
deed.ownershipHistory.push({
  ownerName:newOwnerName,
  nid:newOwnerNid,
  fromDate:transferDate,
  toDate:null,
  transferReason,
  transferDocumentNo,
  transferHash
})
const newOwnerData = {
  deedId: deed.deedId,
  ownerName: newOwnerName,
  nid: newOwnerNid,
  khatianNo: deed.khatianNo,
  dagNo: deed.dagNo,
  mouza: deed.mouza,
  landArea: Number(deed.landArea),
  landUnit: deed.landUnit,
  registrationDate: deed.registrationDate
};

deed.ownerWithDeedHash = generateHash(newOwnerData);

deed.currentOwner = {
  name: newOwnerName,
  nid: newOwnerNid
};

await deed.save();

return res.status(200).json({
  message:"Owner ship transfer successfull"
})

}