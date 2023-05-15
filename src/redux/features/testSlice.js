import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const LoginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
 
    getData: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = LoginSlice.actions

export default LoginSlice.reducer