import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="sticky top-0 z-50 shadow-lg">
      <nav className='h-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 flex justify-between items-center text-white px-6 md:px-8'>
        <div className='flex items-center space-x-6'>
          <ul className="flex items-center space-x-4">
            <li>
              <Link 
                to="/" 
                className={`text-lg font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-white/20 backdrop-blur-sm shadow-md scale-105' 
                    : 'hover:bg-white/10 hover:scale-105'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/favroite" 
                className={`text-lg font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive('/favroite') 
                    ? 'bg-white/20 backdrop-blur-sm shadow-md scale-105' 
                    : 'hover:bg-white/10 hover:scale-105'
                }`}
              >
                Favorite
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center'> 
          <div className="relative group">
            <button className="text-lg font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center space-x-2">
              <span>Profile</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header