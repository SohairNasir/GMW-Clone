import {configureStore} from'@reduxjs/toolkit'
import themeSlice from './Redux/Slices/ThemeSlice'
import carSlice from './Redux/Slices/CarModels'

export const store = configureStore({
    reducer:{
        Theme : themeSlice,
        Cars : carSlice
    }
})