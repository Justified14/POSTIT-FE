import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import {useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navhead from '../components/Navhead2'

export default function Story() {
  const [story, setStory] = useState([])
  const {id} = useParams();
  const token = JSON.parse(localStorage.getItem('token'));
  const url = `https://postitapi.onrender.com/api/v1/All/${id}`

  const fetchData = async () => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    // console.log(data);
    setStory(data.story);
  }
  useEffect(()=>{
    fetchData();
}, [])
  return (
    <>
    <Navhead/>
    <Container className='p-5 text-center'>
    <div key={story._id}>
            <h1>{story.title}</h1>
            <div className='image-fluid'><img src={story.image} alt="" style={{width:'200px'}}/></div>
            {/* <div>{story.tag}</div> */}
            <p>{story.paragraph}</p>

      </div>

    </Container>
    <Footer/>
    </>
  )
}
