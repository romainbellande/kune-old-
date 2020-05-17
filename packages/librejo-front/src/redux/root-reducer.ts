import { combineReducers } from '@reduxjs/toolkit';

import authSlice from './slices/auth/auth.slice';

export const initialState = {
  auth: authSlice.reducer,
};

const rootReducer = combineReducers(initialState);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
