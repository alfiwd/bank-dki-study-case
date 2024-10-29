import { createSlice } from '@reduxjs/toolkit';

export const topUpSlice = createSlice({
  name: 'topUp',
  initialState: {
    topUpType: null,
    topUpAmount: 0,
  },
  reducers: {
    setTopUpType: (state, param) => {
      state.topUpType = param.payload;
    },
    setTopUpAmount: (state, param) => {
      state.topUpAmount = param.payload;
    },
  },
});

export const { setTopUpType, setTopUpAmount } = topUpSlice.actions;
export default topUpSlice.reducer;
