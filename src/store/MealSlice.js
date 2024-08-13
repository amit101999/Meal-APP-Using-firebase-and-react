import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    meals: [],
}

export const mealSlice = createSlice({
    name: "mealData",
    initialState: initialState,
    reducers: {
        addMeals: (state, action) => {
            state.meals = [...state.meals, action.payload]
        },
        removeMeal: (state, action) => {
            state.meals = state.meals.filter((item) => item !== action.payload)
        }
    }
})

export const { addMeals, removeMeal } = mealSlice.actions

export default mealSlice.reducer