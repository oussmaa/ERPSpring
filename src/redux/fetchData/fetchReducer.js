/* eslint-disable default-case */
import { LOADING_DATA, LOADING_FAILED, LOADING_SUCCESS } from "./fetchActions"

const initialState = {
    loading : true,
    products : [],
    error : ""
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA : 
            return {
                ...state,
                loading : true
            }
        case LOADING_SUCCESS : 
            return {
                loading : false,
                products : action.payload,
                error : ""
            }
        case LOADING_FAILED : 
            return {
                loading : false,
                products : [],
                error : action.payload
            }
        default :
           return state
    }
}


export default reducer