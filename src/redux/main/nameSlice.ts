import { createSlice } from '@reduxjs/toolkit';

interface INameState {
  names: string[]
};

const initialState: INameState = {
  names: localStorage.getItem('cities')?.split(',') || [],
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    addCity: (state, action) => {
      const name: string = action.payload;

      state.names.push(name);
      localStorage.setItem('cities', state.names.join(','));
    },
    removeCity: (state, action) => {
      const index: number = action.payload;

      state.names.splice(index, 1);
      localStorage.setItem('cities', state.names.join(','));
    },
  },
})
export const { addCity, removeCity } = nameSlice.actions

export default nameSlice.reducer;