import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import Navhead from '../components/Navhead2'

export default function Create() {
  const [tag, setTag] = useState('');
  const [title,setTitle] = useState('');
  const [paragraph, setparagraph] = useState('');
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState('');
  const [load, setLoad] = useState('');
  const url = 'https://postitapi.onrender.com/api/v1/story'
  const token = JSON.parse(localStorage.getItem('token'));

  const redirect = useNavigate();

  const submit = async (e) => {
    setLoad(true);
      e.preventDefault();
      const formData = new  FormData();
      formData.append('tag',tag);
      formData.append('title', title);
      formData.append('paragraph', paragraph);
      formData.append('image', image);
      try {
        const res = await fetch(url, {
          method: 'POST',
          body: formData,
          headers: {
            'authorization': `Bearer ${token}`
          }
        });
           await res.json();
        setMsg('Story Published');
        redirect("/Stories");
        
      } catch (error) {
        setMsg('Story not Published');
      }
  }
  return (
    <>
        <Navhead/>
        <Container className='mt-3 create'>
            <h2 className='fw-5'>Create Story</h2>
            
            <h3>{msg}</h3>
            <form encType="multipart/form-data" onSubmit={submit}>
                <label htmlFor="tag">Tags</label><br />
                <input type="text" name='tag' id='tag' value={tag} onChange={(e) => setTag(e.target.value)} placeholder='Write a story Tag' className='Story1'/><br />
                <label htmlFor="title">Titles</label><br />
                <input type="text" name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Write a title' className='Story1'/><br />
                <label htmlFor="paragraph">Paragraph</label><br />
                <textarea type="text" name='paragraph' id='paragraph' value={paragraph} onChange={(e) => setparagraph(e.target.value)} placeholder='Write a story.....' className='Story'/><br />
                <label htmlFor="image">Images</label><br />
                <input type="File"  accept="image/*" name="image" id="image" onChange={(e) => setImage(e.target.files[0])}/><br />
                <button type='submit' className='mt-3 publishbtn'>{load ? 'Publishing story': 'Publish Story'}</button>
            </form>

            </Container>

        <Footer/>

    </>
  )
}
