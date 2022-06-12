import { ToggleButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { upDateC, upDateF } from "../../redux/main/unitSlice";
import { Styled } from "./style";

const ToggleTemperature = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: any) => state.unit.unit);

    const onCClick = () => {
        dispatch(upDateC())
    }

    const onFClick = () => {
        dispatch(upDateF())
    }
    return <Styled.SwitchButton>
    <ToggleButton value='C' size="small" >
        <input name="toggle" type="radio" onChange={onCClick} checked={value === 'C'} />°C
        <input name="toggle" type="radio" onChange={onFClick} checked={value === 'F'} />°F
    </ToggleButton>
    </Styled.SwitchButton>
}

export default ToggleTemperature;







