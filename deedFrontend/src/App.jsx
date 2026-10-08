import axios from 'axios'
import React, { useEffect } from 'react'
import { api } from './api'

function App() {
  useEffect(()=>{
    const getData=async()=>{
     const res= await api.get("/")
     console.log(res)
    }
    getData()
  },[])
  return (
    <div>
     <h1>Hello</h1> 
    </div>
  )
}

export default App
