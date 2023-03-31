import React from 'react'
import { Container } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import{BsTwitter} from 'react-icons/bs'
import{GrLinkedinOption} from 'react-icons/gr'
import {FaFacebookF} from 'react-icons/fa'

export default function Footer({text1,text2}) {
  return (
    <div className='what' style={{background: '#292929', marginBottom: '5px'}} >
        <Container className=' mt-5 w-100 '>
            <div className='d-flex justify-content-between align-items-center footer'>
        <div className='mt-4 footer2' style={{width:'18rem'}}>
       <h6 style={{color: '#FDFEFF'}}>About Post<span className='B'>it.</span></h6>
        <p  style={{color: '#FFFFFF', fontSize: '13px', lineHeight: '1.5rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vero omnis eos itaque adipisci sit at cum ratione consequatur id doloremque, saepe 
            repellendus aliquam ea voluptas, dolores nemo voluptatem necessitatibus quidem.</p>
            </div>
            <div className='mt-4 footer2'>
                <h6 style={{color: '#FDFEFF', fontSize: '13px'}}>Quick Menu</h6>
                <NavLink style={{color: '#FFFFFF', textDecoration: 'none', fontSize: '12px'}}>
                  <p>Home</p> 
                  <p>Stories</p> 
                  <p>Trending Stories</p> 
                  <p>Popular Stories</p> 
                </NavLink>
            </div>
            <div className='mt-4 footer2'>
                <NavLink style={{color: '#FFFFFF', textDecoration: 'none', fontSize: '12px'}} >
                  <p>{text1}</p> 
                  <p>{text2}</p> 
                  <p>Contact Us</p> 
                </NavLink>
            </div>
            <div className='footer2' style={{width: '20rem'}}>
                <h6 style={{color: '#FDFEFF', fontSize: '13px'}}>Subscribe to our newsletter</h6>
                <form className='mt-3'>
                <input type='text'placeholder='Email address' id='email' className='subscribe' style={{width: '20rem'}} required />
                <div>
                <button className='subscribeb' style={{color: ' #FFFBFB', background:'#0086B0', border: 'none', 
                width: '90px',height: '25px'}}>Subscribe</button>
                </div>
                </form>
            </div>
            </div>
            <hr style={{color: '#FDFEFF'}}/>
            <div className='d-flex justify-content-end gap-3'>
            <p style={{color: '#FDFEFF'}}>Terms and Policy</p>
            <div className='d-flex gap-3 logo'>
            <BsTwitter/>
            <FaFacebookF/>
            <GrLinkedinOption/>
            </div>
            </div>
            </Container>
            
    </div>
  )
}