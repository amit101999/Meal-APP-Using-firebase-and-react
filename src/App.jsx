import React, { useEffect } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favroite from './pages/Favroite';
import CategoriesItem from './components/CategoriesItem';
import { getData } from './firebase/methods';
import { useDispatch } from 'react-redux';
import { addMeals } from './store/MealSlice';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getData().then((data) => {
        data.forEach((doc) => {
          const id = doc.data().mealId
            dispatch(addMeals(id))
          })
    })
},[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favroite' element={<Favroite />} />
        <Route path="/:category" element = { < CategoriesItem />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App