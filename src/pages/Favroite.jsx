import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { getData } from '../firebase/methods'
import FavroiteItem from '../components/FavroiteItems'

const Favroite = () => {
  const [meals , setMeals] = useState([])
  useEffect(() => {
    getData().then((data) => {
      data.forEach((doc) => {
        const id = doc.id
        const mealData = { id, ...doc.data() }
        setMeals((prev) => [...prev, mealData])
        
      })
    }) 
  },[])

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50 to-rose-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              My Favorites
            </h1>
            <p className="text-lg text-gray-600">
              Your saved meal collection
            </p>
            {meals.length > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                {meals.length} {meals.length === 1 ? 'favorite meal' : 'favorite meals'}
              </p>
            )}
          </div>

          {meals.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {meals.map((item) => {
                return (
                  <FavroiteItem 
                    key={item.id} 
                    id={item.mealId} 
                    name={item.name}
                    img={item.imgUrl} 
                    cat={item.category} 
                    docId={item.id} 
                  />
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-gray-400 mb-4">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">No Favorites Yet</h2>
              <p className="text-gray-500 text-center max-w-md">
                Start exploring meals and add your favorites to see them here!
              </p>
            </div>
          )}
        </div>
      </div>
  )
}

export default Favroite