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
        <div>
          <Header />
            <SearchBar />
            <h1 className='text-3xl '>Categories Of Food Items</h1>
          <div className='grid grid-cols-4 mt-5 gap-2'>
              {   meals ? meals.map((item) => {
                  return (
                    <SingleItem  key={item.idCategory}  img={item.strCategoryThumb} description={item.strCategoryDescription} category={item.strCategory} />
                    )
                    }) :<></> }
                
         </div>
    </div>
  )
}

export default Home