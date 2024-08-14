import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Theme/slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
