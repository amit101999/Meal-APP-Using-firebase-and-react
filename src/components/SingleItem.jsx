import React from 'react'
import { Link } from 'react-router-dom'

const SingleItem = ({ description , category , img   }) => {
  return (
    <div className='bg-slate-800 text-white p-1 border-2 w-88' >
      
          <p className='text-1xl'>Category : { category}</p>
          <img className="w-full"  src={img} alt="" />
          <p className='text-1xl'>{ description.slice(0,100)}</p>
          <button className='bg-sky-500'>
              <Link to={`${category}`}> Know more about</Link>
          </button>
    </div>
  )
}

export default SingleItem