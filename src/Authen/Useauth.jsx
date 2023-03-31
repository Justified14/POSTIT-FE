import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Useauth = () => {
  const token = JSON.parse(localStorage.getItem('token')) 
  if (token) {
    return <Outlet/>
  }else {
    return <Navigate to='/login'/>
  }
}

export default Useauth;