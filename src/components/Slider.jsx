import {useState} from "react";
import './Slider.css'
export const Slider = () => {
    const [value, setValue] = useState(0);
    return(
        <div className={"slider"}>
            <button className={"buttons"} onClick={e => {
                setValue(value + 1)
            }}>+
            </button>
            <div className={"count"}>{value}</div>
            <button className={"buttons"} onClick={e => {
                setValue(value - 1)
            }}>-
            </button>
        </div>
    )
}

export default Slider;