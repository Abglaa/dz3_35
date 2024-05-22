const CounterComponent = () => {
    return (
        <span>0</span>
    )
}

const ButtonComponent = ({sign}) => {
    return (
        <button>{sign}</button>
    )
}

const ContainerComponent = () => {
    return (
        <div>
            <CounterComponent/>
        </div>
    )
}

const App = () => {
    return (
        <ButtonComponent sign="-">
            <ContainerComponent/>
            <ButtonComponent sign="+">
        )
    }