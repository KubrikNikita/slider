import {useState} from "react";
import Counter from "../components/Counter";
import AddCounterList from "./AddCounterList.jsx";
import Input from "./Input.jsx";

export const AddCounter = () => {
    const [inputValue, setInputValue] = useState("");
    const [counterList, setCounterList] = useState([]);
    const [maxValue, setMaxValue] = useState("");
    const addCounter = () => {
        const newCounter = counterList.map((item) => item)
        const min = parseInt(inputValue)
        const max = min + 10
        const randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min)
        setMaxValue(randomNumber)
        newCounter.push(inputValue)
        setCounterList(newCounter)
    }

    return (
        <>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <button className={"add__counter_button"} onClick={() => addCounter()}>Добавить счетчик</button>
            <AddCounterList counterList={counterList} maxValue={maxValue}/>
        </>
    )
}
export default AddCounter;