import React from 'react'
import { useState } from 'react';




function Home() {

  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);
  const handleClick = (e) => {
    setName('luigi');
    setAge(30);
  }
  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>{ name }</p>
      <p>{ age }</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home