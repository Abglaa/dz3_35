import { useSelector, useDispatch } from "react-redux";


const CounterComponent = () => {
    const counter = useSelector((state) => state.counter);

    return (
        <span>{counter}</span>
    )
}

const ButtonComponent = ({sign}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: sign === '+' ? 'INCREMENT' : 'DECREMENT' });
    };

    return (
        <button onClick={handleClick}>{sign}</button>
    );
}

const ContainerComponent = () => {
    return (
        <div>
            <CounterComponent />
        </div>
    )
}

const App = () => {

    return (
        <>
            <ButtonComponent sign="+" />
            <ContainerComponent />
            <ButtonComponent sign="-" />
        </>
    )
}
export default App;