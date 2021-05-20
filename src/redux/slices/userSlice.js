import { createSlice } from '@reduxjs/toolkit';

export const initialState = [
    { id: 1, name: 'acarpenter@lslog.com', loggedIn: true },
    { id: 2, name: 'jcarter@lslog.com', loggedIn: false },
    { id: 3, name: 'kchao@lslog.com', loggedIn: false },
    { id: 4, name: 'demouser@lslog.com', loggedIn: false },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
        const user = {
        id: new Date(),
        name: action.payload.name,
        loggedIn: false,
      };
    }
  }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;