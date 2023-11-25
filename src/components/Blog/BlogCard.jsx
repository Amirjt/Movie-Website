import React from 'react'

export default function BlogCard({img , cat , title , authimg , authname , date}) {
  return (
    <div className='bg-[#141414] rounded-xl flex flex-col justify-between shadow-xl cursor-pointer hover:-hue-rotate-30 duration-300'>
      <img src={img} alt="" className='w-fit rounded-lg' />
      <div className='p-4 flex flex-col gap-4' >
        <span className='bg-main text-white p-2 rounded-lg self-start text-[11px]' >{cat}</span>
        <h2 className='text-main font-semibold text-lg' >{title}</h2>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <img className='w-10 rounded-full' src={authimg} alt="" />
        <div className='felx w-full'>
            <span className='text-sm text-white' >{authname}</span>
            <span className='text-sm text-gray-700 ml-[90px]' >{date}</span>
        </div>
      </div>
    </div>
  )
}
