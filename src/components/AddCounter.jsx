import {useState} from "react";
import Counter from "../components/Counter";
import AddCounterList from "./AddCounterList.jsx";
import Input from "./Input.jsx";

export const AddCounter = () => {
    const [inputValue, setInputValue] = useState("");
    const [counterList, setCounterList] = useState([]);
    const addCounter = () => {
        const newCounter = counterList.map((item) => item)
        const min = parseInt(inputValue)
        const max = min + 10
        const randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min)

        const id = Math.random()

        newCounter.push({inputValue, randomNumber, id})
        setCounterList(newCounter)
    }


    const deleteCounter = (id) => {
        const del = counterList.filter((item) => item.id !== id)
        setCounterList(del)
    }

    const arr = [
        {
            name: "John",
            age: 20,
            list: [1, 2, 4]

        },
        {
            name: "Johnasd",
            age: 1123,
            list: [1, 2, 4, "2"]

        },
        {
            name: "John",
            age: 20,
            list: [1, 2, 4, "2"]


        },
        {
            name: "John",
            age: 20,
            isDeleted: true
        },

        {
            name: "Mike",
            age: 20,
            list: ["asd", "sad", "w", "2"]
        },
        {
            name: "Mikasdasasdsade",
            age: 20,
            list: [2,3,"e"]
        }
    ]

    const filtred = arr.filter((e) => {
        const typeOf = () => {
            if (e.list === undefined) {
                return false
            }

            const isHasStrig = e.list.reduce((_ ,currentValue) => {
                if (typeof currentValue === "string") {
                    return true
                }
            }, false)

            return  isHasStrig

            //
            // for (let i = 0; i < e.list.length; i++) {
            //     if (typeof e.list[i] === 'string')
            //         return true
            // }
        }


        console.log(typeOf(), e.name)

        if (e.name === "John" && e.age > 18 && e.isDeleted !== true && typeOf() === true) {
            return true
        }
    })


    // name = John, age > 18, isDeleted = false,


    return (
        <>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <button className={"add__counter_button"} onClick={() => addCounter()}>Добавить счетчик</button>
            <AddCounterList counterList={counterList} deleteCounter={deleteCounter}/>
        </>
    )
}
export default AddCounter;