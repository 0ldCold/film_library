import { createSlice } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';
interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    themeSwitch: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    themeSwitchByAmount: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { themeSwitch, themeSwitchByAmount } = themeSlice.actions;

export default themeSlice.reducer;
