import { ICoords } from "../../pages/WeatherPage/types";

export interface IFooter {
    city: string,
};

export interface IItemContent {
    dt_txt: string,
    main: {
        temp: number,
    },
    weather: string[]
}

export interface IProps {
    city: string | null,
    day: string | null,
    coords?: ICoords
}
