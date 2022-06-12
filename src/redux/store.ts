import { configureStore } from '@reduxjs/toolkit';
import unitReducer from '../redux/main/unitSlice';
import nameReducer from '../redux/main/nameSlice';
import dataReducer from '../redux/main/dataSlice';
import messageReducer from '../redux/main/messageSlice';
import openPopupSlice from './main/popupSlice';


export const store = configureStore({
  reducer: {
      unit: unitReducer,
      name: nameReducer,
      data: dataReducer,
      message: messageReducer,
      openPopup: openPopupSlice,
  },
})