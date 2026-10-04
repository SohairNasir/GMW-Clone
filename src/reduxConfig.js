import {configureStore} from'@reduxjs/toolkit'
import themeSlice from './Redux/Slices/ThemeSlice'
import carAds from './Redux/Slices/CarAds'

export const store = configureStore({
    reducer:{
        Theme : themeSlice,
        carModels : carAds
    }
})