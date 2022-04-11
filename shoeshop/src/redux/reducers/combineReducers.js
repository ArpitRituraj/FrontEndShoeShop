import { combineReducers } from "redux";
import { getProductRed } from "./reducers";

const reducer=combineReducers({
    getAllProductRed:getProductRed
})

export default reducer;