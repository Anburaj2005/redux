import { createSlice } from "@reduxjs/toolkit";



const initialStatevalue={name:"",age:0,email:""}
export const userSlice=createSlice({
    name:"user",
    initialState:{value: initialStatevalue},
reducers:{
login:(state,action)=>{

    state.value=action.payload;
},
logout:(state,action)=>{
state.value=action.initialStatevalue;
},

}

});
export const {login,logout}=userSlice.actions;
export default userSlice.reducer;