import React from 'react'

export default function Button({text , icon}) {
  return (
    <>
    <button className='bg-main rounded-lg w-24 h-10 px-2 text-sm text-white hover:scale-105 duration-300 flex gap-2 items-center justify-center' >{icon}{text}</button>
    </>
  )
}
