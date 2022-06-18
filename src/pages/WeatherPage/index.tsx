import { CircularProgress } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { UnitContext } from "../../context/UnitContext";
import { getFormattedDate, getFormattedTemp } from "../../helpers";
import { fetchData } from "../../redux/main/dataSlice";
import Styled from "./style";
import { ICoords } from "./types";

const Weather: FC = () => {
    const [coords, setCoords] = useState<ICoords>();
    const [searchParams] = useSearchParams();
    const city = searchParams.get("city");
    const day = searchParams.get("day");

    const dispatch = useDispatch();
    const { unit } = useContext(UnitContext);
    const data = useSelector((state: any) => state.data.data);
    const loading = useSelector((state: any) => state.data.loading);

    useEffect(() => {
        if (!city) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setCoords({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            });
        };
    }, [city]);

    useEffect(() => {
        dispatch(fetchData({ city, coords }) as any);
    }, [city, coords]);

    const today = new Date().getDate();

    const firstData = data?.list?.[0];
    const dailyTemp = data?.list?.find((item: any) => new Date(item?.dt_txt).getDate() === +(day || 0))

    return loading ? <Styled.Loader style={{ textAlign: 'center', margin: 100 }}><CircularProgress /></Styled.Loader> : <>
        <Styled.Main id={data?.city?.id}>
            <Styled.MainContent>
                <Styled.CityTemp>
                    <h3>{data?.city?.name}</h3>
                    <p>{!day ? getFormattedTemp(unit, firstData?.main.temp) : getFormattedTemp(unit, dailyTemp?.main.temp)}</p>
                </Styled.CityTemp>
                <Styled.WeatherContent>
                    {firstData?.weather?.[0]?.icon &&
                        <Styled.WeatherIcon src={`http://openweathermap.org/img/wn/${firstData?.weather?.[0]?.icon}@2x.png`}
                        />}
                    {firstData?.weather?.[0]?.main}
                </Styled.WeatherContent>
            </Styled.MainContent>
            <Styled.DailyContent>
                {data?.list?.filter((item: any) => {
                    return !day ? (new Date(item?.dt_txt).getDate() === today) : (+day === new Date(item?.dt_txt).getDate())
                })
                    .map((item: any) => {

                        const temp = getFormattedTemp(unit, item.main.temp)
                        const date = getFormattedDate(item?.dt_txt)
                        return <Styled.DailyTemp key={Math.random()} >
                            <p>{date}</p>
                            <p>{temp}</p>
                            {firstData?.weather?.[0]?.icon &&
                                <Styled.DailyWeatherIcon>
                                    <img src={`http://openweathermap.org/img/wn/${item?.weather?.[0]?.icon}@2x.png`} alt='icon' />
                                </Styled.DailyWeatherIcon>}
                        </Styled.DailyTemp>
                    })
                }
            </Styled.DailyContent>
        </Styled.Main>
        <Footer city={city} day={day} coords={coords} />
    </>;
};

export default Weather;