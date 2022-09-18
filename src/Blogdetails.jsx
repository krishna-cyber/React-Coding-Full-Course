import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Blogdetails() {
    const {id} = useParams();
    const {data:blog, isPending, isError} = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleDelete = async() => {
        await axios.delete(`http://localhost:8000/blogs/${id}`)
       .then( (res)=> {
        console.log(res);
        console.log(`Deleted successfully`);
        navigate('/');
        })
        .catch( (err)=> {
        console.log(err);
        })
    }
  return (
    <div className = "blog-details">
      {isError && <div>{isError}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div><p>{blog.content}</p></div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
    )}
  



export default Blogdetails;