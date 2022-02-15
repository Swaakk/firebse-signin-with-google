import React from 'react'
import {FaSignOutAlt} from "react-icons/fa"
import {BsFillChatLeftFill} from "react-icons/bs"

const Header = () => {
  return (
    <header className=' bg-white h-16 '>
        <div>
            <a className='flex justify-end relative top-5 right-10 cursor-pointer text-blue-500'><FaSignOutAlt size={28} /></a>
            <a className=' absolute left-10 text-blue-500'><BsFillChatLeftFill size={28}/></a>
            <h1 className='text-center text-xl text-black-900 font-bold '>Randit</h1>
        </div>
    </header>
  )
}

export default Header