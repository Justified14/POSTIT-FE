import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Navhead from '../components/Navhead2'

export default function Edit() {
  const [tag, setTag] = useState('');
  const [title,setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [load, setload] = useState(false);

  const {id} = useParams();
  const url = `https://postitapi.onrender.com/api/v1/story/${id}`
  const token = JSON.parse(localStorage.getItem('token'));

  const fetchStory = async (e) => {
      const res = await fetch(url,{
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const {story} = await res.json();
      setTag(story.tag);
      setTitle(story.title);
      setParagraph(story.paragraph);
  }
    useEffect(() => {fetchStory()})

  const redirect = useNavigate();

  const handleUpdate = async (e) => {
    setload(true)
    e.preventDefault();
    const res = await fetch(url,{
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({title, paragraph ,tag, })         
    });
       await res.json();
    redirect('/Stories')
}

  return (
    <>
            <Navhead/>
        <Container className='mt-3'>
            <h2 className='fw-5'>Edit Story</h2>
            <form>
                <label htmlFor="tag">Tags</label><br />
                <input type="text" name='tag' id='tag' value={tag} onChange={(e) => setTag(e.target.value)} placeholder='Write a story Tag' className='Story1'/><br />
                <label htmlFor="title">Titles</label><br />
                <input type="text" name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Write a title' className='Story1'/><br />
                <label htmlFor="paragraph">Paragraph</label><br />
                <textarea type="text" name='paragraph' id='paragraph' value={paragraph} onChange={(e) => setParagraph(e.target.value)} placeholder='Write a story.....' className='Story'/><br />
                <button onClick={handleUpdate} type='submit' className='mt-3 publishbtn'>{load ? 'Updating story': 'Update Story'} </button>
            </form>
        </Container>

        <Footer/>

    </>
  )
}
