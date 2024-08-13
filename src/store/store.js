import { configureStore } from '@reduxjs/toolkit'
import MealReducer from "./MealSlice"

export const store = configureStore({
    reducer: {
        meal: MealReducer
    },
})