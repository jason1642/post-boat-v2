// Combine all reducers 

import { combineReducers } from 'redux';
import userReducer from './user-reducer.ts';
import socketReducer from './socket-reducer.ts'
// Function that takes an objects of all reducers to combine 
const reducers = combineReducers({
  currentUser: userReducer,
  socket: socketReducer,
});


export type RootState = ReturnType<typeof reducers>

// Always export default reducers functions
export default reducers;