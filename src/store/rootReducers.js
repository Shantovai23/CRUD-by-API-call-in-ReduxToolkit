import {combineReducers} from '@reduxjs/toolkit'
import {postSlice} from '../redux/slice'

export const rootReducer=combineReducers({
  allPost:postSlice.reducer
})