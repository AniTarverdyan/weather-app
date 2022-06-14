import styled from "styled-components";

const CityPage = styled.div`
height: 100%;
`

const AddCityName = styled.div`
display: flex;
justify-content: center;
margin: 15px;
`

const TextFieldWrapper = styled.div`
margin: 8px;
`

const CityBox = styled.div`
display: flex;
height: 100px;
width: 250px;
border: 1px solid #ccc;
align-items: center;
justify-content: space-evenly;
margin: 15px ;
`

const InputValue = styled.div`
display: flex;
flex-wrap: wrap;
text-transform: uppercase;
`

const DeleteButtonWrapper = styled.div`
background-color: red;
border-radius: 50%;
color: white;
margin: 15px;
`

export const Styled = {
CityPage,
AddCityName,
TextFieldWrapper,
InputValue,
CityBox,
DeleteButtonWrapper
}
