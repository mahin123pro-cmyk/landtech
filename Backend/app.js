import express from "express";
import { generateHash } from "./utils/hash.js";
import cors from "cors"
import { deedHashMaker } from "./controllers/deedHashMaker.controller.js";
import morgan from "morgan";
import { deedverification } from "./controllers/deedVerification.js";
import { deedDetails } from "./controllers/deedDetails.js";
import { ownerShipTransferController } from "./controllers/ownerShipController.js";

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))

app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello Bangladesh")
})

app.post("/api/deedsmaker",deedHashMaker)


app.post("/api/deedverification",deedverification)
app.post("/api/deedverification/:id",deedDetails)

app.post("/api/transfer",ownerShipTransferController)






export {app}