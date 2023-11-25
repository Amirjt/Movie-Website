import React from 'react'
import { useState , useEffect } from 'react'
import BlogCard from './BlogCard'

export default function Blog() {

  const [data , setData] = useState([])

  const fetchBlogData = () => {
    fetch("http://localhost:3000/data/blogData.json").then(res  => res.json()).then(data => setData(data))
  }

  useEffect(()=>{
    fetchBlogData()
  },[])

  return (
    <div className='bg-[#242424] p-12 flex flex-col gap-8'>
      <h2 className='text-3xl font-semibold text-main border-b border-solid pb-4 w-72'>Latest Blogs</h2>
      <div className='grid grid-cols-5 gap-2'>
        {data.map(blog=>(
          <BlogCard img={blog.thumbnail} cat={blog.category} title={blog.title} authimg={blog.author.image} authname={blog.author.name} date={blog.date} />
        ))}
      </div>
    </div>
  )
}
