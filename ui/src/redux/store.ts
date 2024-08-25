import { combineReducers, configureStore } from '@reduxjs/toolkit';

import ordersReducer from './slices/ordersSlice';

const rootReducer = combineReducers({
  orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
