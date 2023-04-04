import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../Images/Logo.svg'

export default function Navhead() {
    const redirect = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    redirect('/Login')

  }
  return (
    <>
      <div className='d-flex justify-content-between align-item-center nav2'>
        <div className='navImg'>
        <NavLink to="/Dashboard">
            <img src= {Logo} alt=""/>
        </NavLink>
        </div>
        <div className='d-flex navh'>
           <NavLink to="/Allstories"><h6>Stories</h6></NavLink>
            <NavLink to="/create"><h6>Write</h6></NavLink>
            <button onClick={handleLogout} style={{color: '#FFFBFB', background:'#0086B0', border: '1px solid #0086B0', 
                width: '90px',height: '25px', lineHeight: '0px'}}>Logout</button>
        </div>
        </div>
    </>
  ) 
}
