import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ToggleTemperature from "../ToggleTemperature";
import { Styled } from "./style";

const Header: FC = () => {
    const currentPage = useLocation()
    
    const shouldRenderToggleTemperature =  currentPage.pathname !== '/cities' 

    return (
        <Styled.HeaderContent>
            <Styled.NavBar>
                <NavLink to='/'><Styled.NavItem isActive={currentPage.pathname === '/weather' }>Home</Styled.NavItem></NavLink> 
                <NavLink to='/cities'><Styled.NavItem isActive={currentPage.pathname === '/cities' }>Favorite Cities</Styled.NavItem></NavLink>
            </Styled.NavBar>
            {shouldRenderToggleTemperature && <ToggleTemperature />}
        </Styled.HeaderContent>
    )
};
export default Header;
