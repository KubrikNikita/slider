import {useState} from "react";
import Counter from "../components/Counter";
import AddCounterList from "./AddCounterList.jsx";
import Input from "./Input.jsx";

export const AddCounter = () => {
    const [inputValue, setInputValue] = useState("");
    const [counterList, setCounterList] = useState([]);
    const addCounter = () => {
        const newCounter = counterList.map((item) => item)
        newCounter.push(0)
        setCounterList(newCounter)
    }
    return (
        <>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <button className={"add__counter_button"} onClick={() => addCounter()}>Добавить счетчик</button>
            <AddCounterList counterList={counterList} inputValue={inputValue} setInputValue={setInputValue}/>
        </>
    )
}
export default AddCounter;