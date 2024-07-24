import AddCounter from "../components/AddCounter";
import Counter from "../components/Counter";

export const AddCounterList = ({counterList,deleteCounter}) => {
    return (
        counterList.map((item) => {
            return (<Counter inputValue={item.inputValue} randomNumber={item.randomNumber} id={item.id} deleteCounter={deleteCounter} />);
        })
    )
}
export default AddCounterList;