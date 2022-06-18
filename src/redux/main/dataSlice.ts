import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WeatherApi } from '../../api';
import { ICoords } from '../../pages/WeatherPage/types';

export interface IFetchData {
    city?: {
        name: string;
    };
    coords?: ICoords;
    list?: {
        dt_txt: string;
        main: {
            temp: number;
        };
        weather: {
            description: string;
            icon: String;
        }[];
    }[];
}

export const fetchData = createAsyncThunk(
    'data/fetch',
    async ({ city, coords }: { city: string | null; coords?: ICoords }) => {
        if (city) {
            return WeatherApi.getWeatherByCity(city)
        }
        else if (coords) {
            return WeatherApi.getWeatherByCoords(coords)
        }
    }
);

export interface DataState {
    data: IFetchData;
    loading: boolean;
}

const initialState: DataState = {
    data: {},
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