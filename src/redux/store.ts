import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from '../redux/main/dataSlice';
import messageReducer from '../redux/main/messageSlice';
import nameReducer from '../redux/main/nameSlice';
import openPopupSlice from './main/popupSlice';

const rootReducer = combineReducers({
    name: nameReducer,
    data: dataReducer,
    message: messageReducer,
    openPopup: openPopupSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
