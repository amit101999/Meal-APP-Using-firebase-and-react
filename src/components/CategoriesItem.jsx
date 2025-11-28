import React, { useEffect, useState } from 'react'
import Header from './Header'
import SearchBar from '../components/SearchBar'
import {categoriesMeals, searchByCategory} from "../api.js"
import SingleItem from '../components/SingleItem.jsx'
import {  useParams } from 'react-router-dom'
import CategorySignleItem from './CategorySignleItem.jsx'
import { useSelector } from 'react-redux'

const CategoriesItem = () => {
    const params = useParams();
    const query = params.category
    const [catMeals, setCatMeals] = useState([]);

    const meals = useSelector((state) => state.meal.meals)

    useEffect(() => {
        searchByCategory(query).then((data) => {
            setCatMeals(data.data.meals)
        })
    })

   
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 capitalize">
                        {query} Meals
                    </h1>
                    <p className="text-lg text-gray-600">
                        Discover delicious {query} recipes
                    </p>
                    {catMeals && (
                        <p className="text-sm text-gray-500 mt-2">
                            {catMeals.length} {catMeals.length === 1 ? 'meal' : 'meals'} found
                        </p>
                    )}
                </div>
                {catMeals && catMeals.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {
                            catMeals.map((item) => {
                                return <CategorySignleItem key={item.idMeal}
                                    id={item.idMeal} name={item.strMeal} img={item.strMealThumb}
                                />
                            })
                        }
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-xl text-gray-500 font-medium">No meals found</p>
                        <p className="text-gray-400 mt-2">Try searching for a different category</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoriesItem