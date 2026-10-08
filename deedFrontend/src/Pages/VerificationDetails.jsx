import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Deedqrcode from '../Deedqrcode'

const VerificationDetails=()=> {
  const {id}=useParams()
  const [details,setDetails]=useState({})
  const [details2,setDetails2]=useState({})
  useEffect(()=>{
const data=async()=>{
 const res= await axios.post(`http://192.168.0.105:3000/api/deedverification/${id}`)

 setDetails(res.data.message)
 console.log(res.data.message)
}
data()
  },[id])
  return (
    <div>
      <h1>{details.mouza}</h1>
      <Deedqrcode url={`http://192.168.0.105:5173/verification/${id}`}/>

  <div>
    {
      details.ownershipHistory.map((e)=>{
        return <div> 
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
