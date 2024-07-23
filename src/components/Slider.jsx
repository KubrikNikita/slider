import {useState} from "react";
import './Slider.css'
export const Slider = () => {
    const [value, setValue] = useState(0);
    let counter = 0;
    const increase = (value) => {
        return setValue(value => value + 1);
    }
    const decrease = (value) => {
        return setValue(value => value - 1);
    }
    return(
        <div className={"slider"}>
            <button className={"buttons"} onClick={e => {
                increase()
            }}>+
            </button>
            <div className={"count"}>{value}</div>
            <button className={"buttons"} onClick={e => {
                decrease()
            }}>-
            </button>
        </div>
    )
}

export default Slider;