import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changeColor:(state)=>{
            state.color="yellow"
        }
    }
})
export const  {changeColor}=colorSlice.actions;
export default colorSlice.reducer;
