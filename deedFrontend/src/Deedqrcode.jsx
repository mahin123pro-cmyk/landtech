import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

function Deedqrcode({url}) {
   
    const verificationUrl=`${url}`
  return (
    <div >
      <QRCodeSVG value={verificationUrl} size={200} />
      <p>Id</p>
    </div>
  )
}

export default Deedqrcode
