import React from "react";
import {  Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import rectangle from "../Images/Rectangle 5.png";
import rectangle2 from "../Images/Rectangle 5 (1).png";
import rectangle3 from "../Images/Rectangle 5 (2).png";
import Navhead from "../components/Navhead";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navhead />
      <div className="homepage">
          <div className="Stay">
              <h1>Stay Curiuos.</h1>
              <p>
                Curiosity is an innate trait that drives many to explore the
                unknown, to research further and to find the answers to their
                questions. It is an essential trait for learning, understanding
                the world around us, and discovering new possibilities.
                Curiosity encourages us to ask questions, take risks, and solve
                problems. It also pushes us to be open-minded, think creatively,
                and reflect critically on ideas and situations. Ultimately,
                curiosity gives us a purpose and allows us to reach our fullest
                potential.
              </p>
              <Link to="/signup">
                <button className="btn">Get Started</button>
              </Link>
          </div>
      </div>
      <div className='d-flex justify-align-content-between align-self-center gap-2 m-4 p-3 secbox'>
            <div className='d-flex gap-3 '>
            <img src={rectangle} alt=""/>
              <div className='d-flex flex-column gap-2 mt-2'>
                <button className='life'>Lifestyle</button>
                <h6>The 20 biggest fashion company in Nigeria</h6>
              </div>
            </div>

            <div className='d-flex gap-3 '>
            <img src={rectangle2} alt=""/>
              <div className='d-flex flex-column gap-2 mt-2'>
                <button className='life2'>Nature</button>
                <h6 >The 20 biggest Agro company in Nigeria</h6>
              </div>
            </div>

            <div className='d-flex gap-3 '>
            <img src={rectangle3} alt=""/>
              <div className='d-flex flex-column gap-2 mt-2'>
                <button className='life3'>Technology</button>
                <h6>The 20 biggest Tech company in Nigeria</h6>
              </div>
            </div>
            </div>
      <Container className='thrdbox p-3'>
            <h5 className='text-center m-4 fw-bold'>Try Post<span className='B'>it.</span></h5>
            <p className='text-center m-3'>Do you want to write or discover stories from writers on any topic?</p>
            <form className='m-3 text-center'>
                <input type='text'placeholder='Email address' id='email' className='' style={{width: '20rem'}} required />
                <Link to='/Signup'>
            <button className='' style={{color: ' #FFFBFB', background:'#0086B0', border: 'none', 
                width: '90px',height: '30px'}}>Get Started</button>
            </Link>
                </form>
        </Container>
        <Footer text1='Signup' text2='Login'/>
    </>
  );
}
