import React, { useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Create() {
  const [title,setTitle]= useState('');
  const [content,setContent]= useState('');
  const [author,setAuthor]= useState('mario');
  const [isPending,setIsPending]= useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, content, author};
    console.log(blog);
    setIsPending(true);

    axios.post('http://localhost:8000/blogs', blog)
  .then(function (response) {
    console.log(response);
    console.log(`Addedd successfully`);
    setIsPending(false);
    navigate('/');
  })
  .catch(function (error) {
    console.log(error);
  });

  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" value={title} onChange= {(e)=>setTitle(e.target.value)} required />
        <label>Blog body:</label>
        <textarea value={content} onChange = {(e)=>setContent(e.target.value)} required></textarea>
        <label>Blog author:</label>
        <select value={author} onChange = {(e)=>setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
        
      </form>
    </div>
  )
  
}

export default Create