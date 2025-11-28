import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import {categoriesMeals} from "../api.js"
import SingleItem from '../components/SingleItem.jsx'

const Home = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        categoriesMeals().then((data) => {
            setMeals(data.data.categories)
        })
    },[])
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
          <Header />
          <div className="container mx-auto px-4 py-8">
            <SearchBar />
            
            <div className="mt-12 mb-8 text-center">
              <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-3'>
                Food Categories
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of delicious meal categories and discover amazing recipes
              </p>
              {meals && (
                <p className="text-sm text-gray-500 mt-3">
                  {meals.length} {meals.length === 1 ? 'category' : 'categories'} available
                </p>
              )}
            </div>

            {meals && meals.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {meals.map((item) => {
                  return (
                    <SingleItem  
                      key={item.idCategory}  
                      img={item.strCategoryThumb} 
                      description={item.strCategoryDescription} 
                      category={item.strCategory} 
                    />
                  )
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="text-gray-400 mb-4">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="text-xl text-gray-500 font-medium">Loading categories...</p>
              </div>
            )}
          </div>
        </div>
    )
}

export default Home