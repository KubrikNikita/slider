import AddCounter from "../components/AddCounter";
import Counter from "../components/Counter";

export const AddCounterToggle = ({counter}) => {
    return (
        counter.map(() => (<Counter/>))
    )
}
export default AddCounterToggle;