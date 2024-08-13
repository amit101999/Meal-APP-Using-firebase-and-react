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
        <div>
            <Header />
            <p className='text-2xl'>`All meals of {query}</p>
            <div className='grid grid-cols-4 gap-4'>
                {
                    catMeals ? catMeals.map((item) => {
                        return <CategorySignleItem key={item.idMeal}
                            id={item.idMeal} name={item.strMeal} img={item.strMealThumb}
                        />
                    }) :<></>
                }
            </div>

    </div>
  )
}

export default CategoriesItem