import { configureStore } from '@reduxjs/toolkit';
import addUser from './testSlice';

export default configureStore({
  reducer: {
    // the name of our slice
    usersNameOfSlice: addUser,
  },
});