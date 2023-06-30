import { LOADING_DATA, LOADING_FAILED, LOADING_SUCCESS } from "./fetchActions"

export const loadingData = () => {
     return { 
                type : LOADING_DATA 
            }
}
export const loadingSuccess = (products) => {
     return { 
                type : LOADING_SUCCESS,
                payload :  products
            }
}
export const loadingFailed = (error) => {
     return { 
                type : LOADING_FAILED,
                payload :  error
            }
}