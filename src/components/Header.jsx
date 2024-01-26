import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='text-center mt-10'>
        <Link 
        className='text-xl mx-2'
        to='/'>Home</Link>
        <Link 
        className='text-xl mx-2'
        to='/survey'>Survey</Link>
    </nav>
  )
}
