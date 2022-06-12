/// <reference types="styled-components/cssprop" />
import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFormattedTemp } from "../../helpers";
import { Styled } from "./style";
import { IProps } from "./type";

const Footer: FC<IProps> = ({ city, coords }: IProps) => {
    const unit = useSelector((state: any) => state.unit.unit);
    const data = useSelector((state: any) => state.data.data);
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
                {data?.list?.filter((item: any, index: number) => index % 8 === 0).
                    map((item: any) => {
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