import { ToggleButton } from "@mui/material";
import { useContext } from "react";
import { UnitContext } from "../../context/UnitContext";
import { Styled } from "./style";

const ToggleTemperature = () => {
    const {unit, setUnit} = useContext(UnitContext);
    const setTemperatureUnit = (unit: string) => () => {
        setUnit(unit);
    }
    
    return <Styled.SwitchButton>
    <ToggleButton value='C' size="small" >
        <input name="toggle" type="radio" onChange={setTemperatureUnit('C')} checked={unit === 'C'} />°C
        <input name="toggle" type="radio" onChange={setTemperatureUnit('F')} checked={unit === 'F'} />°F
    </ToggleButton>
    </Styled.SwitchButton>
}

export default ToggleTemperature;







