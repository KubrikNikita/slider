import AddCounter from "../components/AddCounter";
import Counter from "../components/Counter";

export const AddCounterList = ({counterList, inputValue, setInputValue}) => {
    return (
        counterList.map(() => (<Counter inputValue={inputValue} setInputValue={setInputValue} />))
    )
}
export default AddCounterList;