import {combineReducers} from 'redux'
import bootstrapReducer from './bootstrap'

export default combineReducers({
    bootstrap: bootstrapReducer
})