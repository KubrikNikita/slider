import {useState} from "react";
import './Counter.css'
export const Counter = () => {
    const [value, setValue] = useState(0);
    const increase = (value) => {
        return setValue(value => value + 1);
    }
    const decrease = (value) => {
        return setValue(value => value - 1);
    }
    const returnToZero = (value) => {
        return setValue(value => value = 0);
    }
    return(
        <div className={"slider"}>
            <button className={"buttons"} onClick={() => {
                increase()
            }}>+
            </button>
            <button className={"buttons"} onClick={() => {
                decrease()
            }}>-
            </button>
            <div className={"count"}>{value}</div>
            <button className={"buttons"} onClick={() => {
                returnToZero(value);
            }}>DEL
            </button>

        </div>
    )
}

export default Counter;