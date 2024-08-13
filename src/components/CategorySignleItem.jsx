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
        <div className='bg-slate-800 text-white p-1 border-2 w-80' >
        <p className='text-2xl'>Name : {name.slice(0, 10)}</p>
            <img className="w-full"  src={img} alt="" />
        <p className='text-1xl'>Meal Id : {id}</p>

        {
          meals.includes(id) ?
            <button className='bg-sky-500' onClick={ ()=> removeFavroite(id) }> Remove from Favroite</button>
            : <button className='bg-sky-500' onClick={ addFavroite} >Add to Favroite</button>
        } 
            
      </div>
    )
  }

export default CategorySignleItem



