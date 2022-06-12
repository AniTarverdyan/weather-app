import styled from "styled-components";

interface INavItemProps {
    readonly isActive: boolean;
}

const HeaderContent = styled.div`
background-color: indigo;
height: 40px;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const NavItem = styled.div<INavItemProps>`
color: white;
margin: 8px;
color: ${({ isActive }) => isActive ? 'gray' : ''};

`
const NavBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color: #ccc;
padding: 0 10px;
transition: color .2s linear;
`
export const Styled = {
    HeaderContent,
    NavItem,
    NavBar
}