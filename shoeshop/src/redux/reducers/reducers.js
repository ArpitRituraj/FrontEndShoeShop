import { actionTypes } from "../Constants/actionTypes.js"

const initialState=[]
export const getProductRed=(state=initialState,{type,payload})=>{
 switch(type){
     case actionTypes.getAllData:
     return state=[...payload]
     default : return state;
 } 
} 