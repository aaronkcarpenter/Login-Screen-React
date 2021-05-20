import { configureStore } from '@reduxjs/toolkit';
import addUser from '../slices/testSlice';

export default configureStore({
  reducer: {
    // the name of our slice
    usersNameOfSlice: addUser,
  },
});