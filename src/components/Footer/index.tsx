/// <reference types="styled-components/cssprop" />
import { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getFormattedTemp } from "../../helpers";
import { DataState } from "../../redux/main/dataSlice";
import  Styled  from "./style";
import { IFooter, IItemContent } from "./type";


const Footer: FC<IFooter> = ({ city }: IFooter) => {
    const unit = useSelector((state: string) => state.unit.unit);
    const data = useSelector((state: DataState) => state.data.data);

    const location = useParams();

    const today = new Date().getDate();

    return (
        <Styled.Footer>
            <Styled.FooterContent>
                {data?.list?.filter((_item: string[], index: number) => index % 8 === 0).
                    map((item: IItemContent) => {
                        return <Styled.Box key={Math.random()}
                            isActive={!location?.day ? today === new Date(item?.dt_txt).getDate() : +(location?.day || 0) === new Date(item?.dt_txt).getDate()}
                        >
                            <NavLink to={`/weather/${city ? data.city.name : city}/${new Date(item?.dt_txt).getDate()}`}>
                                <Styled.Date>
                                    {(new Date(item?.dt_txt).getMonth()) + 1 + '-' + new Date(item?.dt_txt).getDate()}
                                </Styled.Date>
                                <Styled.TempIcon>
                                    {getFormattedTemp(unit, item?.main?.temp)}
                                    {item?.weather?.[0]?.icon &&
                                        <Styled.WeatherIcon
                                            src={`http://openweathermap.org/img/wn/${item?.weather?.[0]?.icon}@2x.png`} />}
                                </Styled.TempIcon>
                            </NavLink>

                        </Styled.Box>
                    })}
            </Styled.FooterContent>
        </Styled.Footer>
    )
};
export default Footer;