import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Navhead from '../components/Navhead2'
import Dashboardimg from '../Images/Dashboard.svg'
import Spinner from '../utils/Spinner';

export default function Allstories() {
  const url = 'https://postitapi.onrender.com/api/v1/All';
  const [stories, setStories] = useState([]);
  const [loading, setloading] = useState(true);
  const token = JSON.parse(localStorage.getItem('token'));


  
  const fetchData = async () => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setloading(false)
    const data = await res.json();
    setStories(data.stories);
  };
  useEffect(()=>{
      fetchData();
  })

  return (
    <>
    <Navhead/>
    <div className='d-flex px-5 py-2 align-items-center allSt' style={{background:'#F5F6F8'}}>
      <Container className='storyD'>
      <h1>You've got a story,</h1>
        <h1>Post<span className='B'>it.</span></h1>
        <p>Information is data that has been organized and presented in a particular way to make it more useful and understandable. Information can come in a variety of formats, such as text, images, audio, and video. It can also be stored digitally or physically. Information is needed to make decisions and solve problems, to gain knowledge, and to be creative.</p>
      </Container>
      <Container className='img'>
        <img src={Dashboardimg} alt="" />
      </Container>
    </div>
    
    {loading && <Spinner />}
      <div className="gridcontainer gap-1">
    {stories.map((story) => {
        const {_id,title,paragraph, image} = story;
        return (
          <div key={_id} className='storeD'>
            <img src={image} alt="" className='imgSize'/>
            {/* <h3>{tag}</h3> */}
            <h4>{title}</h4>
            <p>{paragraph.slice(0,100)}</p>
            <Link to={`/Story/${_id}`}>
            <p>&#8594; Readmore...</p>
            </Link>

          </div>
        )

    })}

    </div>
  
    <Footer/>
    </>
  )
}
