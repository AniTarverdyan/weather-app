import { Button, IconButton, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { Styled } from "./style";
import ClearIcon from '@material-ui/icons/Clear';
import cities from 'cities.json';
import { useNavigate } from "react-router-dom";
import AlertDialog from "./popup";
import { ICity } from "../../interfaces/types";
import { useDispatch, useSelector } from "react-redux";
import { addCity, removeCity } from "../../redux/main/nameSlice";
import { addMessage, changeMessage } from "../../redux/main/messageSlice";
import { openPopupWindow } from "../../redux/main/popupSlice";

const AddCity: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const names: string[] = useSelector((state: any) => (state.name.names).map((item: string) => item));

    const enteredCity: ICity | undefined = (cities as ICity[]).find((item: ICity) => (item.name).toLowerCase() === inputValue.toLowerCase() || (item.name).toUpperCase() === inputValue.toUpperCase());
    const changeInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value)
    };
    const addCityName = (event: any): void => {
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
        event.preventDefault();
    };

    const deleteCity = (index: number) => (event: any) => {
        event.stopPropagation();
        dispatch(removeCity(index));
    };
    const goToHomePage = (city: string) => {
        navigate(`/weather/${city}`);
    };

    return (
        <Styled.CityPage>
            <Styled.AddCityName>
                <Styled.Input>
                    <TextField
                        label="Search City"
                        variant="standard"
                        onChange={changeInputValue}
                        value={inputValue}
                    />
                </Styled.Input>
                <Button
                    variant="contained"
                    size="small"
                    color="warning"
                    onClick={addCityName}
                >
                    Add City+
                </Button>
            </Styled.AddCityName>
            <Styled.InputValue>
                {names.map((name, index) =>
                    <Styled.CityBox
                        key={Math.random()}
                        onClick={() => goToHomePage(name)}>
                        {name}
                        <Styled.Delete>
                            <IconButton
                                aria-label="delete"
                                color="inherit"
                                size="small"
                                onClick={deleteCity(index)} >
                                <ClearIcon />
                            </IconButton>
                        </Styled.Delete>
                    </Styled.CityBox>
                )}
            </Styled.InputValue>
            <AlertDialog />
        </Styled.CityPage>
    )
};
export default AddCity;