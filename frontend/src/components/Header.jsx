import React from 'react'
import { FaChevronLeft } from "react-icons/fa";

const Header = ({setActive}) => {
  return (
    <div className='w-full flex items-center justify-between px-12 py-4'>
        <div className='text-3xl flex items-center gap-3'>
            <FaChevronLeft className='text-2xl'/> Create Workorder
        </div>
        <button className='text-lg text-teal-900 hover:text-white px-12 py-2 rounded-md bg-teal-300 hover:bg-teal-400'
          onClick={()=>setActive(true)}
          >
            Save
        </button>
    </div>
  )
}

export default Header