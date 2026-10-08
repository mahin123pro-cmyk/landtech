import { deedModel } from "../models/deedModel.js"
import { generateHash } from "../utils/hash.js"
import crypto from "crypto"
export const deedHashMaker=async(req,res)=>{
  
  const {ownerName,nid,khatianNo,dagNo,mouza,landArea,landUnit,registrationDate}=req.body
  
const deedId=`LV-D-${crypto.randomBytes(8).toString("hex").toUpperCase()}`


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

console.log("Deed hash",deedHash)

const data= await deedModel.create({
    deedId:deedId,

     currentOwner: {
        name: ownerName,
        nid:nid,
      },
    
    khatianNo:khatianNo,
    dagNo:dagNo,
    mouza:mouza,
    landArea:landArea,
    landUnit:landUnit,
    registrationDate:registrationDate,
    documentHash:deedHash,
    ownerWithDeedHash:ownerWithDeedHash,
 ownershipHistory: [{
  ownerName,
  nid,
  fromDate: registrationDate,
  toDate: null,
  transferReason: "Original Owner",
  transferDocumentNo: deedId,
  transferHash: ownerWithDeedHash
}]
    

})

const findDeedId=await deedModel.findById(data.id)

console.log(findDeedId)

res.status(200).json({message:findDeedId})

}