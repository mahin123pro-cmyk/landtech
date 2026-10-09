import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Deedqrcode from '../Deedqrcode'
import { api } from '../api'

const VerificationDetails=()=> {
  const {id}=useParams()
  const [details,setDetails]=useState({})
  const [details2,setDetails2]=useState({})
  useEffect(()=>{
const data=async()=>{
 const res= await api.post(`/api/deeddetails/${id}`)

 setDetails(res.data.message)
 console.log(res.data.message)
}
data()
  },[id])
  return (
    <div>
      <h1> {details &&details.mouza}</h1>
      <Deedqrcode url={`${window.location.origin}/verification/${id}`}/>

  <div>
    {
    details&& details.ownershipHistory?.map((e,index)=>{
        return <div key={index}> 
          <h1>Owner Name :{e.ownerName}</h1>
          <h1>From Date :{e.fromDate}</h1>
          <h1>To Date : {e.toDate}</h1>
          <h1>Transfer Document No{e.transferDocumentNo}</h1>
           </div>
      })

    }
  </div>
    </div>
  )
}

export default VerificationDetails
