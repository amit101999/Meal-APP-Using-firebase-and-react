import React from 'react'
import { Link } from 'react-router-dom'

const SingleItem = ({ description , category , img   }) => {
  return (
    <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-gray-200'>
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
          src={img} 
          alt={category} 
        />
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-3 capitalize">
          {category}
        </h3>
        <p className='text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3'>
          {description.slice(0, 100)}...
        </p>
        <Link 
          to={`/${category}`}
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          <span>Explore Recipes</span>
          <svg 
            className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default SingleItem