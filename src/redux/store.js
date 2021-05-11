import { configureStore } from '@reduxjs/toolkit';
import addUser from './testSlice'

export default configureStore({
  reducer: {
    users: addUser,
  },
});