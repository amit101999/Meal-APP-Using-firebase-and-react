
import axios from 'axios';

export const getMeals = async (text) => {
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        return res
    } catch (err) {
        console.error('Error fetching meals:', err);

    }
}

export const categoriesMeals = async (text) => {
    try {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")

        return res
    } catch (err) {
        console.error('Error fetching meals:', err);

    }
}

export const searchByCategory = async (category) => {
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        return res
    } catch (err) {
        console.error('Error fetching meals:', err);
    }
}

export const searchByID = async (id) => {
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        return res
    } catch (err) {
        console.error('Error fetching meals:', err);
    }
}


