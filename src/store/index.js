import { configureStore } from '@reduxjs/toolkit';

import stepperReducer from './slices/stepperSlice';
import pinReducer from './slices/pinSlice';
import topUpSlice from './slices/topUpSlice';

const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    pin: pinReducer,
    topUp: topUpSlice,
  },
});

export default store;
