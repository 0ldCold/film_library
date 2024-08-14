import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    themeSwitch: (state) => {
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = nextTheme;
    },
    themeSwitchByAmount: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { themeSwitch, themeSwitchByAmount } = themeSlice.actions;

export default themeSlice.reducer;
