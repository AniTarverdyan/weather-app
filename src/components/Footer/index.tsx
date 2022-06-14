/// <reference types="styled-components/cssprop" />
import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFormattedTemp } from "../../helpers";
import { DataState } from "../../redux/main/dataSlice";
import { Styled } from "./style";
import { IProps } from "./type";

interface IA {
    dt_txt: string,
    main: {
        temp: number,
    },
    weather: string[]
}

const Footer: FC<IProps> = ({ city }: IProps) => {
    const unit = useSelector((state: string) => state.unit.unit);
    const data = useSelector((state: DataState) => state.data.data);
    
    const navigate = useNavigate();
    const location = useParams();

    const goToCityPage = (day: number) => () => {
        if (city) {
            navigate(`/weather/${city}/${day}`)
        }
        else {
            navigate(`/weather/${data.city.name}/${day}`)
        }
    };
    const today = new Date().getDate();

    return (
        <Styled.Footer>
            <Styled.FooterContent>
                {data?.list?.filter((_item, index: number) => index % 8 === 0).
                    map((item: IA) => {
                        return <Styled.Box key={Math.random()}
                        onClick={goToCityPage(new Date(item?.dt_txt).getDate())}
                        isActive={!location?.day ? today === new Date(item?.dt_txt).getDate() : +(location?.day || 0) === new Date(item?.dt_txt).getDate()}
                        >
                            <Styled.Date>
                                {(new Date(item?.dt_txt).getMonth()) + 1 + '-' + new Date(item?.dt_txt).getDate()}
                            </Styled.Date>
                            <Styled.TempIcon>
                                {getFormattedTemp(unit, item?.main?.temp)}
                                {item?.weather?.[0]?.icon &&
                                    <Styled.WeatherIcon
                                        src={`http://openweathermap.org/img/wn/${item?.weather?.[0]?.icon}@2x.png`} />}
                            </Styled.TempIcon>
                        </Styled.Box>
                    })}
            </Styled.FooterContent>
        </Styled.Footer>
    )
};
export default Footer;