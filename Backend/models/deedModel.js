import mongoose from "mongoose";



const ownershipHistorySchema=new mongoose.Schema({
    ownerName:{
        type:String,
        required:true
    },nid:{
        type:String,
        required:true
    },fromDate:{
        type:String,
        required:true
    },toDate:{
        type:String,
        default:null
    },transferReason:{
        type:String,
       default:null
    },transferDocumentNo:{
        type:String,
        required:true
    },transferHash:{
        type:String,
        required:true
    }
},{
    _id:false
})

const deedSchema=new mongoose.Schema({
    deedId:{
        type:String,
        required:true,
        unique:true
    },
    currentOwner: {
      name: {
        type: String,
        required: true,
      },
      nid: {
        type: String,
        required: true,
      },
    },
khatianNo:{
        type:String,
        required:true,
        
    },dagNo:{
        type:String,
        required:true,
        
    },mouza:{
        type:String,
        required:true,
        
    },landArea:{
         type:Number,
        required:true,
        
    },landUnit:{
        type:String,
        required:true,
        
    },registrationDate:{
        type:String,
        required:true,
        
    },mutationDate:{
        type:String,
        default:"pending"
    },documentHash:{
        type:String,
        required:true,
        
    },ownerWithDeedHash:{
        type:String,
        required:true,
         
    },ownershipHistory:{
        type:[ownershipHistorySchema],
        default:[]
    }
},{
    timestamps:true
})


export const deedModel=new mongoose.model("Deed",deedSchema)