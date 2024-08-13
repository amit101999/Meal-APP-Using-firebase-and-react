import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div>
          <nav className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between items-center text-white'>
              <div className='flex-row basis-10/12'>
                <ul className="flex">
                      <li className='text-4xl'>
                          <Link to="/" >Home</Link>
                      </li>
                      <li className='text-3xl mx-5'>
                      <Link to="/favroite" >Favroite</Link>
                      </li>
                </ul>
              </div>
              <div className='text-3xl basis-2/2 '> 
                  <ul >
                      <li>Profile</li>
                  </ul>
              </div>
          </nav>
    </div>
  )
}

export default Header