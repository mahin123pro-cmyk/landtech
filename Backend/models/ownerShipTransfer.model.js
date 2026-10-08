import mongoose from "mongoose";

const ownershipTransferSchema = new mongoose.Schema(
  {
    deedId: {
      type: String,
      
      index: true,
    },

    seller: {
      name: {
        type: String,
        
      },
      nid: {
        type: String,
        
      },
    },

    buyer: {
      name: {
        type: String,
        
      },
      nid: {
        type: String,
        
      },
    },

    transferDocumentNo: {
      type: String,
      
    },

    transferDate: {
      type: Date,
      
    },
  },
  {
    timestamps: true,
  }
);

export const ownershipTransferModel =
  mongoose.model("OwnershipTransfer", ownershipTransferSchema);