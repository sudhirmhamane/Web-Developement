import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='py-7 px-10 bg-blue-600 text-white flex items-center justify-between'>

        <h2 className='text-2xl'>Sudhir</h2>

        <div className='flex gap-10 text-lg underline'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Header