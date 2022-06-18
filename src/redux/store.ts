import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from '../redux/main/dataSlice';
import nameReducer from '../redux/main/nameSlice';

const rootReducer = combineReducers({
    name: nameReducer,
    data: dataReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
