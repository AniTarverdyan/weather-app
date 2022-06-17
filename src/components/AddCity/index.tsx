import { Button, IconButton, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import  Styled  from "./style";
import ClearIcon from '@material-ui/icons/Clear';
import cities from 'cities.json';
import { NavLink } from "react-router-dom";
import AlertDialog from "./popup";
import { ICity } from "../../interfaces/types";
import { useDispatch, useSelector } from "react-redux";
import { addCity, removeCity } from "../../redux/main/nameSlice";

const AddCity: FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();
    const names: string[] = useSelector((state: any) => (state.name.names).map((item: string) => item));

    const enteredCity: ICity | undefined = (cities as ICity[]).find((item: ICity) => (item.name).toLowerCase() === inputValue.toLowerCase());
    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value)
    };

    const addNewCiy = (): void => {
        if (names.includes(inputValue)) {
            setOpen(true);
            setMessage('City is already added')
            setInputValue('');
        } else if (enteredCity) {
            dispatch(addCity(inputValue));
            setInputValue('');
        } else {
            setOpen(true);
            setMessage('City is not defined')
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
                        <NavLink to={`/weather/${name}`}
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
            <AlertDialog message={message} open={open} setOpen={setOpen}/>
        </Styled.CityPage>
    )
};
export default AddCity;