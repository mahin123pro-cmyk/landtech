import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

function Deedqrcode({url}) {
   

  return (
    <div >
      <QRCodeSVG value={url} size={200} />
      <p>Id</p>
    </div>
  )
}

export default Deedqrcode
