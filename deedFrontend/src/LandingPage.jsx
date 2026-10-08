import { DatabaseCheck, FileText } from 'lucide-react'
import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import Deedqrcode from './Deedqrcode'
import { Link, useNavigate } from 'react-router-dom'
import deedpic from './assets/deed_of_sale.png'

function LandingPage() {








  const howCanweVarificationText=[{number:"1",headline:"Submit the document",details:"Upload a scan or PDF, enter the deed number, or scan the QR code printed on the deed."},
    {number:"2",headline:"We check it against the registry",details:"LandVerify compares the document's hash and details with the official record and looks for edits."},
    {number:"3",headline:"Get a verification report",details:"See the result, the current owner, and the ownership history. Download the report as a PDF."}
  ]

  const navigate=useNavigate()
const verificationNavigate=()=>{
  navigate("/verification")
}

  return (
    <div className=''>
      <nav className='flex justify-between p-3 fixed left-0 right-0 bg-white z-10'>
        <h1 className='text-blue-950 font-bold text-xl'>Land Verification</h1>
        <div>
             <button className='bg-green-700 cursor-pointer flex rounded px-2 py-1 text-sm' onClick={verificationNavigate}><FileText size={15} className='text-white text-sm' /> <span className='text-white'>Verify a Document</span></button>
       
        </div>
      </nav>



{/* <Link to="/deedmaker" className='inline cursor-pointer'>Deed Maker</Link> */}


      <div className='bg-blue-950 p-5 overflow-x-hidden w-full md:min-h-screen md:px-20 flex flex-col md:flex-row  '>
        <div className='flex-1 flex flex-col  md:justify-around'>

           <div className='w-full mt-20 mb-5'>
          <h1 className='text-white text-3xl text-nowrap md:text-6xl fmd:ont-semibold font-bold font-mono'>Verify Ownership.</h1>
          <h1 className='text-zinc-300 text-3xl text-nowrap md:text-6xl fmd:ont-semibold font-bold font-mono'>Verify Property.</h1>
          <h1 className='text-zinc-300 text-3xl text-nowrap md:text-6xl fmd:ont-semibold font-bold font-mono'>Verify Trust.</h1>
        </div>
        <div className='mb-5'>
          <p className='text-zinc-300 text-xl font-thin md:text-2xl'>Check any land deed against the official registry in seconds. LandVerify detects tampering, confirms the current owner, and shows the full chain of ownership.</p>

        </div>
        <div className='mb-3'>
          <button className='bg-green-600 cursor-pointer flex rounded px-5 py-5 text-2xl' onClick={verificationNavigate}><FileText size={30} className='text-white text-2xl' /> <span className='text-white'>Verify a Document</span></button>
       
        </div>

        <div className=' flex gap-x-7'><h1><span className='text-green-600 text-sm font-semibold'>#</span> <span className='text-zinc-300 text-sm'>Cryptographic hash check</span></h1>
          <h1 className='flex items-center'><span><DatabaseCheck size={15} className='text-green-600 text-2xl font-semibold' /></span> <span className='text-zinc-300 text-sm'>Registry-linked records</span></h1>
        </div>
        </div>
       
<div className=' md:flex-1 mt-20 md:rotate-3'>
<img src={deedpic} className=''/>
</div>

      </div>
<div className='bg-zinc-200 w-full min-h-screen px-13'>
<div className='pt-14'>
  <h1 className='text-black font-semibold text-4xl'>How verification works</h1>
  <p className='text-zinc-600 text-xl max-w-3xl pt-4'>No account needed for a quick check. Upload a deed or scan its QR code and get a result you can rely on.</p>
</div>
<div className='flex flex-col md:flex-row justify-between gap-5 pt-10'>
{
  howCanweVarificationText.map((e)=>{
    return <div key={e.number} className='bg-white p-6 rounded-xl border-zinc-200 shadow-amber-50  '>
<h1 className='bg-green-500/40 text-green-800 font-semibold inline-block rounded px-2 '>{e.number}</h1>
<h1 className='text-xl font-semibold'>{e.headline}</h1>
<p className='text-sm text-gray-600'>{e.details}</p>
       </div>
  })
}
</div>

</div>

<div>
<Deedqrcode/>
</div>

    </div>
  )
}

export default LandingPage
