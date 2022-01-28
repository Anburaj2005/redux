import React, { useState } from "react";
import {useDispatch}from 'react-redux'
import {changeColor}from "../features/theme";


function ChangeColor (){
const [color,setcolor]=useState("");
const dispatch =useDispatch();

return(
    <div>
        <input
        type="text"
        onChange={(event)=>{
            setcolor(event.target.value);
        }}
        />
        <button onClick={()=>{
            dispatch(ChangeColor(color));

        }}>CHANGECOLOR</button>
    </div>
);
}
export default ChangeColor;