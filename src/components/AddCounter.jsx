import {useState} from "react";
import Counter from "../components/Counter";
import AddCounterToggle from "../components/AddCounterToggle";

export const AddCounter = () => {
    const [counter, setCounter] = useState([]);
    const addCounter = () => {
        const newCounter = [...counter, counter]
        setCounter(newCounter)
    }
    return (
        <>
            <button className={"add__counter_button"} onClick={() => addCounter()}>Добавить счетчик</button>
            <AddCounterToggle counter={counter}/>
        </>
    )
}
export default AddCounter;