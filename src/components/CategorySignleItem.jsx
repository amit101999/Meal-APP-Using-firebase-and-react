import React from 'react'
import { searchByID } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addMeals , removeMeal } from '../store/MealSlice'
import { addData } from '../firebase/methods'

const CategorySignleItem = ({ name, img, id }) => {

  const dispatch = useDispatch()
  const meal = [];

  const meals = useSelector((state) => state.meal.meals)
  
  const addFavroite  = () => {
    searchByID(id).then((data) => {
        
      let { idMeal, strMeal, strCategory , strMealThumb } = data.data.meals[0]
      dispatch(addMeals(idMeal))
      addData(strMeal,idMeal,strCategory , strMealThumb)
    })
  }

  const removeFavroite  = (id) => {
    dispatch(removeMeal(id))
    // removeData()
  }

    return (
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-gray-200'>
          <div className="relative overflow-hidden">
            <img 
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" 
              src={img} 
              alt={name} 
            />
            <div className="absolute top-3 right-3">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
                Meal
              </span>
            </div>
          </div>
          
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
              {name}
            </h3>
            <p className='text-sm text-gray-500 mb-4 font-mono'>
              ID: {id}
            </p>
            
            <div className="mt-4">
              {meals.includes(id) ? (
                <button 
                  className='w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2' 
                  onClick={() => removeFavroite(id)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>Remove from Favorites</span>
                </button>
              ) : (
                <button 
                  className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2' 
                  onClick={addFavroite}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Add to Favorites</span>
                </button>
              )}
            </div>
          </div>
        </div>
    )
  }

export default CategorySignleItem



