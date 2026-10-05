import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";
import { useMemo } from "react";

let carAds = createAsyncThunk('carData' , async (_, {rejectWithValue}) => {
    try {
        let carData = await axios.get('https://www.jsonkeeper.com/b/DBHUU')
        if (!carData.data) {
           throw new Error("Data not found");      
        } 

        return carData.data
    } catch (error) {
        // return rejectWithValue(error.response?.data?.message || error.message || "Request failed");
        return [
    {
        "id": 1,
        "name": "tank 500 phev",
        "type": "Dominate Every Terrain",
        "img": "https://djphncgl0uau7.cloudfront.net/homepage_heroSection_imageHD_1781853565519.jpg",
        "nameimg": "https://storage.googleapis.com/havalimages/images/GWMNEWBANNERS19-06-2026/GWMLOGO19-06-2026/01-04.png"
    },
    {
        "id": 2,
        "name": "haval h6",
        "type": "The Icon… Redefined",
        "img": "https://djphncgl0uau7.cloudfront.net/homepage_heroSection_imageHD_1781853706677.jpg",
        "nameimg": "https://storage.googleapis.com/havalimages/images/GWMNEWBANNERS19-06-2026/GWMLOGO19-06-2026/01-08.png"
    },
    {
        "id": 3,
        "name": "haval h6 hev",
        "type": "The Icon… Redefined",
        "img": "https://djphncgl0uau7.cloudfront.net/homepage_heroSection_imageHD_1781853711793.jpg",
        "nameimg": "https://storage.googleapis.com/havalimages/images/GWMNEWBANNERS19-06-2026/GWMLOGO19-06-2026/01-09.png"
    }]   
 }

})




let initialState ={
    data : null,
    loading : true,
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
            state.loading = false
            state.status = 200
            state.message ='data fetch successfully'
        }).addCase(carAds.pending,(state , action)=>{
            state.status = 202
            state.loading = true
            state.message ='data pending'
        }).addCase(carAds.rejected,(state , action)=>{
            state.error=action.payload
            state.loading = false
            state.status = 400
            state.message ='bad request check your api'

            // show default data
            if (action.payload) {
                state.data = action.payload          
            }
        })
    }
    
})


carAds()
export {carAds}
export default CarAdsSlice.reducer