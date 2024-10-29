import { createSlice } from '@reduxjs/toolkit';

export const pinSlice = createSlice({
  name: 'pin',
  initialState: {
    value: 3,
  },
  reducers: {
    setPin: (state, param) => {
      state.value = param.payload;
    },
  },
});

export const { setPin } = pinSlice.actions;
export default pinSlice.reducer;
