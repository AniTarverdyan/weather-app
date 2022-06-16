import ClearIcon from '@material-ui/icons/Clear';
import { Button, IconButton, TextField } from "@mui/material";
import cities from 'cities.json';
import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ICity } from "../../interfaces/types";
import { addMessage, changeMessage } from "../../redux/main/messageSlice";
import { addCity, removeCity } from "../../redux/main/nameSlice";
import { openPopupWindow } from "../../redux/main/popupSlice";
import AlertDialog from "./popup";
import { Styled } from "./style";

const AddCity: FC = () => {
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const names: string[] = useSelector((state: any) => (state.name.names).map((item: string) => item));

    const enteredCity: ICity | undefined = (cities as ICity[]).find((item: ICity) => (item.name).toLowerCase() === inputValue.toLowerCase());
    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value)
    };
    const addNewCiy = (event: any): void => {
        if (names.includes(inputValue)) {
            dispatch(openPopupWindow());
            dispatch(addMessage())
            setInputValue('');
        } else if (enteredCity) {
            dispatch(addCity(inputValue));
            setInputValue('');
        } else {
            dispatch(openPopupWindow());
            dispatch(changeMessage())
        };
    };

    const deleteCity = (index: number) => (event: any) => {
        event.stopPropagation();
        dispatch(removeCity(index));
    };


    return (
        <Styled.CityPage>
            <Styled.AddCityName>
                <Styled.TextFieldWrapper>
                    <TextField
                        label="Search City"
                        variant="standard"
                        onChange={onChangeInputValue}
                        value={inputValue}
                    />
                </Styled.TextFieldWrapper>
                <Button
                    variant="contained"
                    size="small"
                    color="warning"
                    onClick={addNewCiy}
                >
                    Add City+
                </Button>
            </Styled.AddCityName>
            <Styled.InputValue>
                {names.map((name, index) =>
                    <Styled.CityBox>
                        <NavLink to={`/weather?city=${name}`}
                            key={Math.random()}
                        >
                            {name}
                            <Styled.DeleteButtonWrapper>
                                <IconButton
                                    aria-label="delete"
                                    color="inherit"
                                    size="small"
                                    onClick={deleteCity(index)} >
                                    <ClearIcon />
                                </IconButton>
                            </Styled.DeleteButtonWrapper>
                        </NavLink>
                    </Styled.CityBox>
                )}
            </Styled.InputValue>
            <AlertDialog />
        </Styled.CityPage>
    )
};
export default AddCity;