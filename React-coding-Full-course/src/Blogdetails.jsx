import React from 'react'
import { useParams } from 'react-router-dom';

function Blogdetails() {
    const {id} = useParams();

  return (
    <h1>Blogdetails {id}</h1>
  )
}

export default Blogdetails