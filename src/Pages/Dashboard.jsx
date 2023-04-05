import React, {useEffect} from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navhead2 from '../components/Navhead2'
import DashboardImg from '../Images/Dashboard.svg'



export default function Dashboard() {
  const [user, setUser] = useState('')
  const url= 'https://postitapi.onrender.com/api/v1/user'
  const token = JSON.parse(localStorage.getItem('token'));
  const fetchUser = async()=>{
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const {name} = await res.json()
    setUser(name)
  }
  useEffect(()=>{
    fetchUser()
  })
  return (
    <>
    <Navhead2/>
    <Container className='d-flex align-items-center mt-3 dash'>
        <div>
            <h1>Welcome  {user}</h1>
            <p>Information is data that has been organized and presented in a particular way to make it more useful and understandable. Information can come in a variety of formats, such as text, images, audio, and video. It can also be stored digitally or physically. Information is needed to make decisions and solve problems, to gain knowledge, and to be creative.</p>
            <div className='d-flex gap-4 mt-4'>
              <Link to='/Stories'> 
              <button className='' style={{color: ' #FFFBFB', background:'#0086B0', border: 'none', 
                width: '150px',height: '35px'}}>My Stories</button>
              </Link>

              <Link to='/Allstories'>
              <button className='' style={{color: '#0086B0', background:'#FFFBFB', border: '1px solid #0086B0', 
                width: '150px',height: '35px'}}>Go To Feed</button>
              </Link>
            </div>
        </div>
        
            <img src={DashboardImg} alt="" className='img' />
    </Container>
    <Footer/>
    </>
  )
}
