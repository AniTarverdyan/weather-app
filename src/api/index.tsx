import axios from "axios";
import { ICoords } from "../pages/WeatherPage/types";

const appId = 'eec4d504857aafcd1c23c0f69be61e69';
const instance = axios.create({
    baseURL: ('https://api.openweathermap.org/data/2.5/'),
});

export const WeatherApi = {
    getWeatherByCity(city: string) {
        return instance.get(`forecast?q=${city}&appid=${appId}&units=metric`)
    },

    getWeatherByCoords(coords: ICoords) {
        return instance.get(`forecast?lat=${coords.lat}&lon=${coords.lng}&appid=${appId}&units=metric`)
    },
}
