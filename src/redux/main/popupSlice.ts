import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openPopup: false,
}

export const openPopupSlice = createSlice({
    name: 'openPopup',
    initialState,
    reducers: {
        openPopupWindow: (state) => {
            state.openPopup = true
        },
        closePopup: (state) => {
            state.openPopup = false
        }
    },
});

export const { openPopupWindow, closePopup } = openPopupSlice.actions

export default openPopupSlice.reducer;