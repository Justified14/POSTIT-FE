import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navhead from '../components/Navhead2'
import Spinner from '../utils/Spinner'

export default function Stories() {
  const [stories, setStories] = useState([])
  const [loading, setloading] = useState(true)
  const url ='https://postitapi.onrender.com/api/v1/story'
  const token = JSON.parse(localStorage.getItem('token'));


  const fetchData = async () => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setloading(false);
    const data = await res.json();
    // console.log(data);
    setStories(data.stories);
  };
  useEffect(()=>{
      fetchData();
  });

  
  const handleDelete = async (id) => {
    const url = `https://postitapi.onrender.com/api/v1/story/${id}`
    const res = await fetch (url, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
        await res.json();
    // console.log(data);
    window.location.reload(false);
  }
  return (
    <>
      <Navhead/>
      <Container>
      <div className='d-flex justify-content-between align-items-center py-4'>
        <h2>My Stories</h2>
        <Link to='/create'>
            <button style={{color: '#FFFBFB', background:'black', 
                width: '115px',height: '35px'}}>Write Story</button>
        </Link>
      </div>
      <div className='d-flex gap-3'>
        <h5>All</h5>
        <h5 style={{color: '#757575'}}>Drafts</h5>
        <h5 style={{color: '#757575'}}>Published</h5>
      </div>
      <hr className='mt-0' style={{color: 'black'}} />
      {loading && <Spinner />}
      {stories.map((story)=> {
          const {_id,title, paragraph,} = story;
          return(
            <div key={_id} className="mb-4">
            <Container className='d-flex justify-content-between align-items-center p-3'>
              <h6>{title}</h6>
              <div className='d-flex gap-3 btn00'>
              <Link to={`/Edit/${_id}`}>
                <button className='sbtn fs-6'  style={{color: ' #FFFBFB', background:'#0086B0', border: 'none', 
                width: '100px',height: '30px'}}>Edit</button>
                </Link>
              <button onClick={()=> handleDelete(_id)} className='bg-white sbtn2' style={{color: '#0086B0', background:'#FFFBFB', border: '1px solid #0086B0', 
                width: '100px',height: '30px'}}>Delete</button>
              </div>
            </Container>
            <Container>
                <p>{paragraph}</p>
              </Container>
          </div>
          );
         })}

      </Container>
      <Footer/>

    </>
  )
}
