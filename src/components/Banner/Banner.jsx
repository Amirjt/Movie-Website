import Button from "../Button/Button"
import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState , useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Autoplay } from 'swiper/modules';
import "swiper/css"

import "./banner.css"

export default function Banner() {

  const [movies , setMovies] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json").then(res => res.json()).then(data => setMovies(data))
  }

  useEffect(()=>{
    fetchData()
  } ,[])

  const clickhandler = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => ({
        ...movie,
        active: id === movie._id,
      }))
    );
  };
  
  

  return (
    <>
    <div className='banner relative w-full'>
    {movies.map((movie) => (
          movie.active && (
            <div
              key={movie.id}
              className={`movie relative  ${movie.active ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={movie.bgImg}
                alt=""
                className={`w-full h-[1100px]  ${movie.active ? "animate-fade-in" : "animate-fade-out"}`}
              />
              <div className='absolute top-0 left-0 w-full h-full bg-[#242424] bg-opacity-50'></div>
            </div>
          )
        ))}


      <div className='absolute top-72 left-0 px-40 w-full text-3xl text-white  flex flex-col gap-32'>
       {movies.map(movie=>(
        movie.active && (
          <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5 w-1/2">
          <img src={movie.titleImg} className='w-40' alt="" />
          <div className="flex gap-5">
            <span className="p-1" >{movie.year} | </span>
            <span className="bg-main rounded-lg p-1" >{movie.ageLimit}</span>
            <span className="p-1" >| {movie.length}</span>
            <span className="p-1" >| {movie.category}</span>
          </div>
          <div className="text-sm leading-6" >
           {`On ${movie.description}`}
          </div>
          <div className="flex gap-4">
            <Button text="Book" icon={<CiBookmark size={15} />} />
            <Button text="My List" icon={<CiCirclePlus size={15} />}/>
          </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-5xl w-56 font-semibold italic leading-relaxed">
              {movie.date}
            </div>
            <div className="flex items-center gap-5">
            <CiPlay1 className="bg-main rounded-lg p-2 animate-bounce cursor-pointer" size={40} />
              <span>Watch Trailer</span>
            </div>
          </div>
          </div>
        )
       ))}
        <div className="w-full flex bg-[#242424] bg-opacity-60 rounded-lg">
        <Swiper
        spaceBetween={5}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {movies.map(movie =>(
            <SwiperSlide>
              <MovieCard  movie={movie} clickhandler={()=>clickhandler(movie._id)} />
              </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </div>
    </div>
    </>
  );
}
