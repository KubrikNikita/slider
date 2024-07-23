import './Input.css'


export const Input = ({inputValue, setInputValue}) => {
    return (
        <>
            <input className="input" type="number" value={inputValue} onChange={(item) => setInputValue(item.target.value)} />
        </>
    )
}
export default Input;