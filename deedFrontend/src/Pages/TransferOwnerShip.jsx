import React, { useState } from 'react'
import inputImage from "../assets/input2.jpg"
import axios from 'axios'
import { data, redirect, useNavigate } from 'react-router-dom';

function TransferOwnerShip() {
  const navigate = useNavigate()

//   deedId,previousOwnerNid,newOwnerName,newOwnerNid,transferDate,transferReason,transferDocumentNo
 



const [deeds, setDeeds] = useState({ deedId: "", previousOwnerNid: "",newOwnerName:"", newOwnerNid: "", transferReason: "",transferDocumentNo: "", landUnit: "decimal", transferDate: "" });






  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeeds((pre) => ({ ...pre, [name]: value }))

  }

  const submitData = async () => {
    try {

      const res = await axios.post("http://localhost:3000/api/transfer", deeds);
      console.log(res)

    


      setDeeds({ deedId: "", previousOwnerNid: "",newOwnerName:"", newOwnerNid: "", transferReason: "",transferDocumentNo: "", landUnit: "decimal", transferDate: "" });


      
    } catch (error) {
      console.log(error.message)
    }
  }

const clearData=()=>{

   setDeeds({ deedId: "", previousOwnerNid: "",newOwnerName:"", newOwnerNid: "", transferReason: "",transferDocumentNo: "", landUnit: "decimal", transferDate: "" });


}


  return (
    <div className='w-full px-4  bg-cover bg-gray-100 text-zinc-900  md:px-20 overflow-x-hidden'>

      <div className=' w-full   '>
        <div>
          
          </div>   
          <h1 className='text-3xl mt-10 mb-5 md:text-5xl font-semibold  md:font-bold mx-auto text-center'>
            Transfer Land 
            </h1>
        <p className='text-gray-500 text-sm mb-2 md:mb-5 md:text-xl'>
          Enter the details exactly as written on the deed. We check them against official records.

        </p>
      
      <div className='flex flex-col md:flex-row gap-5 w-full mb-10 '>

         <div className='flex-1 p-2 text-lg md:p-9 bg-white gap-5 rounded-2xl'>
           <div className='flex flex-col gap-y-2 mb-5 '>
          <label className=''>
            Deed Id :
          </label>
          <input style={{borderWidth:1}} className='  border-zinc-300 px-4 rounded-xl py-3' type='text' placeholder='e.g. D-2018-04512' name='deedId' value={deeds.deedId} onChange={handleChange} />
        </div>


          <div  className='flex flex-col gap-y-2 mb-5'>
            <label>
             previousOwnerNid :
            </label>
            <input style={{borderWidth:1}} className=' border-zinc-300 px-4 rounded-xl py-3' type='text' placeholder='Full name as on the deed' name='previousOwnerNid' value={deeds.previousOwnerNid} onChange={handleChange} />
          </div>


    <div className='flex flex-col gap-y-2 mb-5 '>
          <label className=''>
           newOwnerName :
          </label>
          <input style={{borderWidth:1}} className='  border-zinc-300 px-4 rounded-xl py-3' type='text' placeholder='e.g. 390309949' name='newOwnerName' value={deeds.newOwnerName} onChange={handleChange} />
        </div>





          <div className='flex flex-col md:flex-row md:justify-between gap-3 gap-y-2 mb-5'>

<div>
            <label>
              newOwnerNid :

            </label>
            <input style={{borderWidth:1}} className='w-full  border-zinc-300 px-4  rounded-xl py-3' type='text' placeholder='newOwnerNid' name='newOwnerNid' value={deeds.newOwnerNid} onChange={handleChange} />
          </div>
          <div>
            <label>
              transferReason :
            </label>
            <input style={{borderWidth:1}}  className='w-full   border-zinc-300 px-4 rounded-xl py-3' type='text' placeholder='transferReason' name='transferReason' value={deeds.transferReason} onChange={handleChange} />
          </div>
          <div>
            <label>
              transferDocumentNo:
            </label>
            <input style={{borderWidth:1}} className=' w-full  border-zinc-300 px-4 rounded-xl py-3' type='text' placeholder='Enter Mouza' name='transferDocumentNo' value={deeds.transferDocumentNo} onChange={handleChange} />
          </div>


          </div>
         
<div className='flex flex-col gap-y-3 md:flex-row md:justify-between '>
<div className='flex'>



             <div className='flex flex-col'>
            <label>
              Land Area :
            </label>
   <div>
             <input  style={{borderWidth:1}} className='  border-zinc-300 px-4 rounded-xl py-3'  type='text' placeholder='Enter Land Area' name='landArea' value={deeds.landArea} onChange={handleChange} />
          
               <select value={deeds.landUnit} name='landUnit' onChange={handleChange} className='bg-blue-950 text-white py-3 rounded-r-lg border-2 px-5'>
              <option value="decimal">Decimal</option>
              <option value="katha">Katha</option>
              <option value="bigha">Bigha</option>
              <option value="acre">Acre</option>
              <option value="hectare">Hactare</option>
              <option value="sqm">Square</option>
            </select></div>   
          
          </div>
    
          </div>
          <div className='flex flex-col'>
            <label>transferDate</label>
            <input className='text-blue-950 font-semibold' name='transferDate' type='date' value={deeds.transferDate} onChange={handleChange} />


          </div>
</div>
          

        <div className='w-full text-center space-x-3.5 mt-6'>

  <button onClick={submitData} className='bg-blue-950 text-gray-100 rounded px-5 py-2 font-semibold hover:bg-orange-500 cursor-pointer transition-colors duration-1000'>Submit </button>
<button   onClick={clearData} className='bg-gray-200 rounded px-5 py-2 font-semibold hover:bg-orange-500 cursor-pointer transition-colors duration-1000'>Clear Form</button>

        </div>
        </div>
        <div className='bg-blue-950 rounded-2xl w-full flex-1 text-white p-5 self-start h-fit'>
          <div>
            <h1>Record preview</h1>
            <h1></h1>
          </div>
<div>

  <h1  className={`  text-white text-3xl font-semibold py-8 ${deeds.deedId?.trim()? "text-white " :"text-gray-400"}`}>{deeds.deedId || "Deed ID"}</h1>
</div>
<div>
  <div className='flex justify-between  py-2 border-gray-400 border-dashed' style={{borderTopWidth:1}} ><h1>Owner</h1>
  <h1 className={deeds.previousOwnerNid?.trim()? "text-white" :"text-gray-400 text-sm"}>{deeds.previousOwnerNid ||"Not entered yet"}</h1>
  </div>

<div className='flex justify-between  py-2 border-gray-400 border-dashed' style={{borderTopWidth:1}} ><h1>Owner NID :</h1>
  <h1 className={deeds.newOwnerName?.trim()? "text-white" :"text-gray-400 text-sm"}>{deeds.newOwnerName ||"Not entered yet"}</h1>
  </div>

  <div className='flex justify-between  py-2 border-gray-400 border-dashed' style={{borderTopWidth:1}}>
    <h1  >
newOwnerNid
    </h1>
    <h1 className={deeds.newOwnerNid?.trim()? "text-white" :"text-gray-400 text-sm"}>
      {deeds.newOwnerNid || "Not entered yet"} 
    </h1>
  </div>
  {//   deedId,previousOwnerNid,newOwnerName,newOwnerNid,transferDate,transferReason,transferDocumentNo
 }

  <div className='flex justify-between  py-2 border-gray-400 border-dashed' style={{borderTopWidth:1}}>
    <h1>
Dag No :
    </h1>
    <h1 className={deeds.dagNo?.trim()? "text-white" :"text-gray-400 text-sm"}>
{deeds.dagNo || "Not entered yet"}
    </h1>
  </div>


  <div className='flex justify-between  py-2 border-gray-400 border-dashed' style={{borderTopWidth:1}}>
    <h1>
Mouza :
    </h1>
    <h1  className={deeds.mouza?.trim()? "text-white" :"text-gray-400 text-sm"}>
      {deeds.mouza || "Not entered yet"}
    </h1>
  </div>


  <div className='flex justify-between  py-2 border-gray-400 border-dashed' style={{borderTopWidth:1}}>
    <h1>
Land Area :
    </h1>
    <h1   className={deeds.landArea?.trim()? "text-white" :"text-gray-400 text-sm"}>
      {deeds.landArea || "Not entered yet"}
    </h1>
  </div>


  <div className='flex justify-between  py-2 border-gray-400 border-dashed' style={{borderTopWidth:1}}>
    <h1>
landUnit :
    </h1>
    <h1  className={deeds.landUnit?.trim()? "text-white" :"text-gray-400 text-sm"}>
      {deeds.landUnit || "Not entered yet"}
    </h1>
  </div>

  <div className='flex justify-between  py-2 border-gray-400 border-dashed' style={{borderTopWidth:1,borderBottomWidth:1}}>
    <h1>
transfer Date :
    </h1>
    <h1    className={deeds.transferDate?.trim()? "text-white" :"text-gray-400 text-sm"}>
      {deeds.transferDate || "Not entered yet"}
    </h1>
  </div>

  
  
</div>
        </div>


      </div>
      </div>
       

<div className='w-full'>
  <h1>kkrkkkrk</h1>
  </div>  

    </div>
  )
}

export default TransferOwnerShip
