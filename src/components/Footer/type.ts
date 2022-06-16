import { ICoords } from "../../pages/WeatherPage/types";

export interface IProps {
    city: string | null,
    day: string | null,
    coords?: ICoords
}