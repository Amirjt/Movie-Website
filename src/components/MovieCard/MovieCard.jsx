import React from 'react'

export default function MovieCard({movie , clickhandler}) {
  return (
    <div className='p-4 rounded-lg cursor-pointer'>
        <img src={movie.previewImg} className='rounded-lg' alt="" onClick={clickhandler} />
    </div>
  )
}
