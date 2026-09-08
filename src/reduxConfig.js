import {configureStore} from'@reduxjs/toolkit'
import themeSlice from './Redux/Slices/ThemeSlice'

export const store = configureStore({
    reducer:{
        Theme : themeSlice,
    }
})