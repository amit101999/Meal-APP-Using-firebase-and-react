import React, { useEffect, useState } from 'react'
import {getMeals } from '../api';
import { useDispatch } from 'react-redux';
import { addMeals } from '../store/MealSlice';
import FavroiteItem from './FavroiteItems';

const SearchBar = () => {

  const [searchText, setSearchText] = useState("");
  const [meals , setMeals] = useState([])
 

  const SearchHandler = () => {
    getMeals(searchText).then((data) => {
      setMeals(data.data.meals)
    })
    console.log(meals.length>0)
  }

  return (
      <>
      <div className="w-full max-w-2xl mx-auto mb-8">
        <div className='relative flex items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden'>
          <div className="flex items-center justify-center pl-5 pr-3">
            <svg 
              className="w-6 h-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder='Search for meals... (e.g., Pizza, Pasta, Burger)'
            className="flex-1 py-4 px-2 text-base md:text-lg outline-none text-gray-700 placeholder-gray-400"
            required
            onChange={(e) => { setSearchText(e.target.value) }}
            value={searchText}
            name='search'
          />
          <button 
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 md:px-8 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-2'
            onClick={() => SearchHandler()}
          >
            <span>Search</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {meals.length > 0 && (
        <div className="w-full">
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Search Results
            </h2>
            <p className="text-gray-600">
              Found {meals.length} {meals.length === 1 ? 'meal' : 'meals'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((item) => {
              return (
                <FavroiteItem 
                  key={item.idMeal} 
                  name={item.strMeal} 
                  img={item.strMealThumb}
                  id={item.idMeal} 
                  cat={item.strCategory} 
                  search={true} 
                />
              )
            })}
          </div>
        </div>
      )}

      {meals.length === 0 && searchText && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-lg text-gray-500 font-medium">No meals found</p>
          <p className="text-gray-400 mt-2">Try searching with a different keyword</p>
        </div>
      )}
    </>
  )
}

export default SearchBar