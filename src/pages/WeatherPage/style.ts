import styled from "styled-components";

const Loader = styled.div`
margin: 100px;
text-align: center;
`

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const MainContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
`

const CityTemp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 20px;
`

const WeatherContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
font-size: 18px;
font-weight: bolder;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const WeatherIcon = styled.img`
height: 200px;
margin-bottom: 20px;
`

const DailyTemp = styled.div`
display: flex;
border-bottom: 1px solid black;
width: 240px;
justify-content: center;
&>p {
    margin: 8px;
}
`
const DailyContent = styled.div`
position: relative;
margin: 10px 40px;
left: 180px;
`

const DailyWeatherIcon = styled.div`
img {
height: 50px;
padding: 5px;
}
`
export default {
    Loader,
    MainContent,
    Main,
    CityTemp,
    WeatherIcon,
    WeatherContent,
    DailyTemp,
    DailyWeatherIcon,
    DailyContent,
}