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
      <div className=' p-1 flex  mx-auto w-96 border-solid border-4 border-gray-950 rounded-lg mt-20 justify-between'>
          <div className="h-12 ">
        <input type="text" placeholder='Eg : Pizza'
          className="outline-none  w-64 text-2xl" required
          onChange={(e) => { setSearchText(e.target.value) }}
          value={searchText}
          name='search'
        />
          </div>
      <button className='bg-sky-500 w-28' onClick={ () => SearchHandler() }>Search</button>
      </div>
       {   meals.length > 0 ? 
        meals.map((item) => {
          return <FavroiteItem key={item.idMeal} name={item.strMeal} img={item.strMealThumb}
            id={item.idMeal} cat={ item.strCategory} search={true} />
      })
      : <></>} 
    </>
  )
}

export default SearchBar