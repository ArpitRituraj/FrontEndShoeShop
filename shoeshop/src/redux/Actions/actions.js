import { actionTypes } from "../Constants/actionTypes.js"

export const getProduct=(productData)=>{
    return {
        type:actionTypes.getAllData,
        payload:productData
    }
}