import React, { useState, useEffect } from 'react';

export default function MainSec() {
  const [movies, setMovies] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);

  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then(res => res.json())
      .then(data => setMovies(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const categories = [
    { id: 1, title: "All" },
    { id: 2, title: "Adventure" },
    { id: 3, title: "Thriller" },
    { id: 4, title: "Action" },
    { id: 5, title: "Romance" },
    { id: 6, title: "Horror" }
  ];

  function clickHandle(id) {
    setActiveCategory(id);
  }

  return (
    <div className='bg-[#242424] p-12 flex flex-col gap-8'>
      <h2 className='text-3xl font-semibold text-main border-b border-solid pb-4 w-72'>Latest Movies</h2>
      <ul className='flex gap-4'>
        {categories.map(category => (
          <li
            key={category.id}
            onClick={() => clickHandle(category.id)}
            className={`shadow-xl p-3 rounded-lg text-white cursor-pointer duration-300 hover:-translate-y-1 ${activeCategory === category.id ? "bg-main border-none" : "border border-solid border-main"}`}
          >
            {category.title}
          </li>
        ))}
      </ul>
      <ul className='grid grid-cols-8 gap-2'>
        {movies.map(movie => (
          <li key={movie.id} className={`relative group duration-300 hover:hue-rotate-180 cursor-pointer ${activeCategory !== 1 && movie.category !== categories[activeCategory - 1].title ? 'hidden' : ''}`}>
            <img src={movie.previewImg} className='rounded-lg' alt="" />
            <div className='absolute left-0 top-0 bg-[#242424] bg-opacity-90 text-white w-full h-full flex flex-col gap-4 justify-center items-center opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible cursor-pointer'>
              <span className='text-xl'>{movie.title}</span>
              <span className='text-base'>{movie.category}</span>
              <span className='text-main font-bold bg-[#242424] p-2 rounded-lg'>{movie.length}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
