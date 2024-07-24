import AddCounter from "../components/AddCounter";
import Counter from "../components/Counter";

export const AddCounterList = ({counterList, maxValue}) => {
    return (
        counterList.map((item) => {
            return (<Counter inputValue={item} maxValue={maxValue}/>);
        })
    )
}
export default AddCounterList;