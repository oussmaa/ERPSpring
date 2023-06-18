import { createStore } from "redux";
import reducer from "./fetchData/fetchReducer";


export const store = createStore(reducer)
 