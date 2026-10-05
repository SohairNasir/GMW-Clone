import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";

let carAds = createAsyncThunk('carData' , async (_, {rejectWithValue}) => {
    try {
        let carData = await axios.get('https://dummyjson.com/produc')
        
        if (!carData.data) {
           throw new Error("Data not found");      
        } 
        return carData.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message || "Request failed");   
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
            state.error=action.payload
            state.status = 404
            state.message ='data not and i set default data'
            if (action.payload) {
                state.data = { // send defalut data 
                    car:'nisaan'
                }
            }
        })
    }
    
})

export {carAds}
export default CarAdsSlice.reducer