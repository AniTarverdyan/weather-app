import styled from "styled-components";

interface IBoxTypes {
     isActive: boolean;
}

const Footer = styled.div`
display: flex;
justify-content: center;
flex: 1;
width: 100%;
max-height: 100px;
padding: 10px;
`
const FooterContent = styled.div`
display: flex;
align-items: flex-end;
`
const Box = styled.div<IBoxTypes>`
width: 150px;
height: 100px;
border: 1px  solid #ccc;
margin: 5px;
transition: box-shadow .2s linear;
box-shadow: ${({ isActive }) => isActive ? '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)' : ''};
cursor: pointer;
:hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
`
const Date = styled.p`
font-size: 10px;
text-align: center;
`
const TempIcon = styled.div`
text-align: center;
font-size: 20px;
font-weight: bolder;
`
const WeatherIcon = styled.img`
height: 50px;
`
export const Styled = {
    Footer,
    FooterContent,
    Box,
    WeatherIcon,
    TempIcon,
    Date,
}