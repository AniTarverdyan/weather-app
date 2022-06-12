import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  unit: 'C',
}

export const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    upDateC: (state) => {
      state.unit = 'C'
    },
    upDateF: (state) => {
      state.unit = 'F'
    }, 
  },
})


export const { upDateC, upDateF } = unitSlice.actions

export default unitSlice.reducer;
