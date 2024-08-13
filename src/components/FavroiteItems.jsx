import React, { useEffect, useState } from 'react'
import { searchByID } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addMeals , removeMeal } from '../store/MealSlice'
import {  addData, removeData } from '../firebase/methods'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const FavroiteItem = ({ name, img, id="", cat, docId = '', search = false }) => {

    const meals = useSelector((state)=>state.meal.meals)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [documentID , setDocumentId] = useState()
    

    const notify = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });

    const addFavroite = () => {
        searchByID(id).then((data) => {
            
          let { idMeal, strMeal, strCategory , strMealThumb } = data.data.meals[0]
          dispatch(addMeals(idMeal))
            const docId = addData(strMeal, idMeal, strCategory, strMealThumb)
            docId.then((data) => {
                setDocumentId(data)
            })
            // notify("meal added to favroite");
        //     setTimeout(() => {
        //         window.location.reload(); 
        //   },2500);
        })
      }

    const removeFavroite = (id) => {
      dispatch(removeMeal(id))
      console.log(id)
        removeData(id)
        // notify("meal deleted from favorites")
      setTimeout(() => {
            window.location.reload(); 
      },2500);
    }

    return (
        <div className='bg-slate-800 text-white p-1 border-2 w-80 fav' id={documentID}>
        <p className='text-2xl'>Name : {name.slice(0, 10)}</p>
        <p className='text-2xl'> Categorie : {cat }</p> 
        <img className="w-full"  src={img} alt="" />
        <p className='text-1xl'>Meal Id : {id}</p>
            {search ?
                <>
                    { meals.includes(id) ? (
                        <button className='bg-sky-500' onClick={(e) => {
                            const id = document.getElementsByClassName('fav')[0].getAttribute('id')
                            console.log(id)
                            removeFavroite(id)
                        }}> Remove from Favroite</button>
                    ) :(
                        <button className='bg-sky-500' onClick={ addFavroite }> Add to Favroite</button>
                    ) }
                </>
                :
                <button className='bg-sky-500' onClick={() => removeFavroite(docId)}> Remove from Favroite</button>
            }
            <ToastContainer />
      </div>
    )
  }

  export default FavroiteItem 
    



