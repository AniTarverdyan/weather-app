import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WeatherApi } from '../../api';
import { IFetchData } from '../../interfaces/types';
import { ICoords } from '../../pages/WeatherPage/types';



export const fetchData = createAsyncThunk(
    'data/fetch',
    async ({ city, coords }: IFetchData) => {
        if (city) {
            return WeatherApi.getWeatherByCity(city)
        }
        else if (coords) {
            return WeatherApi.getWeatherByCoords(coords)           
        }
    }
);

export interface DataState {
    data: [];
    loading: boolean;
}

const initialState: DataState = {
    data: [],
    loading: false,
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload?.data;
                state.loading = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
            });
    },
})

export default dataSlice.reducer;