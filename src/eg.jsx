import { useSelector } from 'react-redux'

const Eg = () => {

    const counterVariable = useSelector((state) => state.counter.counter)

    return (
        <>
            <h1>{counterVariable}</h1>
        </>
    )
}

export default Eg
