import { createSlice } from '@reduxjs/toolkit';

interface IMessageState {
    message: string
};

const initialState: IMessageState = {
    message: '',
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state) => {
            state.message = 'City is already added'
        },
        changeMessage: (state) => {
            state.message = 'City is not defined'
        }
    },
})
export const { addMessage, changeMessage } = messageSlice.actions

export default messageSlice.reducer;