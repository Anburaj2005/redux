import { createSlice } from "@reduxjs/toolkit";



const initialStatevalue="";
export const themeSlice=createSlice({
    name:"theme",
    initialState:{value: initialStatevalue},
reducers:{
changeColor:(state,action)=>{
    state.value=action.payload;

},
},

});
export const {changeColor}=themeSlice.actions;
export default themeSlice.reducer;