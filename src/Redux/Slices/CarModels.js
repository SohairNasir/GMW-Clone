import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
export const fetchCar = createAsyncThunk('carData', async ()=>{
    try {
        let data = await axios.get('https://dummyjson.com/products')
       return data.data

    } catch (error) {
        console.error(new Error(error))        
    }
})

let initialState = {
    carList : [],
    loading : false,
    error : null
}

const carSlice = createSlice({
    name:'carsModel',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(fetchCar.pending , (state)=>{
        state.loading = true
    })
    .addCase(fetchCar.fulfilled,(state , action)=>{
        state.carList = action.payload
        state.loading = false
    })
    .addCase(fetchCar.rejected,(state , action)=>{
        state.loading = false
        state.error = action.payload
    })
}
})

export default carSlice.reducer