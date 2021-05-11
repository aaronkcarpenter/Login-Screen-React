import { createSlice } from '@reduxjs/toolkit';


// Tracks the number of users on the system
const userSlice = createSlice({
  // the name of the slice/piece of data
  name: 'users',
  // dummy data to test
  initialState: [
    { id: 1, name: 'acarpenter@lslog.com', loggedIn: true },
    { id: 2, name: 'jcarter@lslog.com', loggedIn: false },
    { id: 3, name: 'kchao@lslog.com', loggedIn: false },
    { id: 4, name: 'demouser@lslog.com', loggedIn: false },
  ],
  // Takes the current state and creates new state from it based on the action payload
  reducers: {
    // state is simply the currentState of the data
    // the action contains the type and payload info
    // Whenever we dispatch the addUser action, this reducer handles that specific action
    addUser: (state, action) => {
      // Since we are adding a user, we need to create a new user object. It will have
      // the same key/value properties as our dummy data above. Using new Date() for the
      // id to ensure the value is unique
      const user = {
        id: new Date(),
        name: action.payload.name,
        loggedIn: false,
      };
      // Pushing the user into the store/state object. At this point, redux
      // takes the new state and updates the store
      state.push(user);
    },
  },
});

// Utilizing destructuring to  get the addUser action and export it to be added
// to our store
export const { addUser } = userSlice.actions;

// Exporting the reducer so we can add it to our store
export default addUser.reducer;