import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";

let carAds = createAsyncThunk('carData' , async () => {
    console.log('countinue api fetching')
    try {
        let carData = await axios.get('https://dummyjson.com/products')
        return carData.data 
    } catch (error) {
        console.error(new Error(error))
        return rejectWithValue(error.response?.data?.message || "Failed to fetch data"); // ✅ Prevents returning undefined
    }
})

let initialState ={
    data : [],
    error : '',
    status : null,
    message:''
}

const CarAdsSlice = createSlice({
    name : 'carModels',
    initialState , 
    reducers:{},
    extraReducers:(builder) => { 
        builder.addCase(carAds.fulfilled,(state , action)=>{
            state.data = action.payload
            state.status = 200
            state.message ='data fetch successfully'
        }).addCase(carAds.pending,(state , action)=>{
            state.status = 200
            state.message ='data pending'
        }).addCase(carAds.rejected,(state , action)=>{
            state.data = action.payload
            state.status = 404
            state.message ='invalid data fetching'
        })
    }
    
})
carAds()

export {carAds}
export default CarAdsSlice.reducer