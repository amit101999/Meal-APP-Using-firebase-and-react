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
      <div>
      <Header />
      <div className='grid grid-cols-4 gap-6'>
      {
        meals.length > 0 ? meals.map((item) => {
          return <FavroiteItem key={item.id} id={item.mealId} name={item.name}
            img={item.imgUrl} cat={item.category} docId={item.id} />
        }) :
            <div className='text-3xl'> No Favroite item is added</div> 
           
      }
     </div>
    </div>
  )
}

export default Favroite