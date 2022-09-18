import React from 'react'
import useFetch from './hooks/useFetch';
import Blogs from './Blogs';




function Home() {
  const {data:blog, isPending, isError:error} = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
      {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {blog && <Blogs blogs={blog} title="All Blogs" />}
      
    </div>
  )
}

export default Home