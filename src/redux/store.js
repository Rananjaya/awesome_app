import { configureStore } from '@reduxjs/toolkit'
import TestReducer from './features/testSlice'
export const store = configureStore({
  reducer: {
    Test: TestReducer,
  },
})