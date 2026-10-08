import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import VerificationDetails from './Pages/VerificationDetails.jsx'
import DeedMaker from './Pages/DeedMaker.jsx'
import Verification from './Pages/Verification.jsx'
import TransferOwnerShip from './Pages/TransferOwnerShip.jsx'

const rouet=createBrowserRouter([
  {
    path:"/",element:<App/>
  },
  {
  path:"/landinpage",element:<LandingPage/>},
 { path:"/verification",element:<Verification/>},
 {
  path:"/verification/:id",element:<VerificationDetails/>
 },{
  path:"/deedmaker",element:<DeedMaker/>

 },{
  path:"/transfer",element:<TransferOwnerShip/>
 }


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={rouet} />
  </StrictMode>,
)
