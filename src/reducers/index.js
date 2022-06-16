import {formreducer} from "./form1" 
import {rentreducer} from "./rentform" 


import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    formreducer,rentreducer
})