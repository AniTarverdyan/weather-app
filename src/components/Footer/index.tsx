/// <reference types="styled-components/cssprop" />
import { LocationCity } from "@material-ui/icons";
import { FC, useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { UnitContext } from "../../context/UnitContext";
import { getFormattedTemp } from "../../helpers";
import { RootState } from "../../redux/store";
import Styled from "./style";
import { IProps } from "./type";

const Footer: FC<IProps> = ({ city, day }: IProps) => {
    const { unit } = useContext(UnitContext);
    const data = useSelector((state: RootState) => state.data.data);

    const today = new Date().getDate();

    return (
        <Styled.Footer>
            <Styled.FooterContent>
                {data?.list?.filter((_item, index: number) => index % 8 === 0).
                    map((item) => {
                        return <Styled.Box key={Math.random()}
                            isActive={!day ? today === new Date(item?.dt_txt).getDate() : +(day || 0) === new Date(item?.dt_txt).getDate()}
                        >
                            <NavLink to={`/weather?city=${city ? data.city?.name : LocationCity}&day=${new Date(item?.dt_txt).getDate()}`}>
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