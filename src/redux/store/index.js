import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import addUser from '../slices/testSlice';

const reducer = combineReducers({
  // add your reducers here
  userSlice: addUser
})

const store = configureStore({
  reducer,
})

export default store;