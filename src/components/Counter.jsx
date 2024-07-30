import {useState} from "react";
import './Counter.css'
import Input from "./Input.jsx";

export const Counter = ({inputValue, randomNumber, id, deleteCounter}) => {
    const [value, setValue] = useState(Number(inputValue));
    const increase = () => {
        if (value === randomNumber) {
            return;
        }
        return setValue(value => value + 1);
    }
    const decrease = () => {
        return setValue(value => value - 1);
    }
    const returnToZero = (value) => {
        return setValue(value = 0);
    }
    return (
        <>
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
                }}>RST
                </button>
                <button className={"buttons"} onClick={() => {
                    deleteCounter(id)
                }}>DEL
                </button>
            </div>
        </>
    )
}

export default Counter;