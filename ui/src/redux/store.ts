import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ordersReducer, popupReducer } from './slices';

const rootReducer = combineReducers({
  orders: ordersReducer,
  popup: popupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
