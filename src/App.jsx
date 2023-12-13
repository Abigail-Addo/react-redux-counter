import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Eg from './eg'
import { DECREMENT, INCREMENT, RESET } from './store/actions';
// import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const counterVariable = useSelector((state) => state.counter.counter)

  // useEffect(() => {

  // }, [])

  const increase = () => {
    dispatch({type: INCREMENT});
  }

  const decrease = () => {
    dispatch({type: DECREMENT});
  }

  const reset = () => {
    dispatch({type: RESET});
  }

  return (

    <>
      <button onClick={decrease}>Decrease -</button>
      &nbsp; &nbsp;
      {counterVariable}
      &nbsp; &nbsp;
      <button onClick={increase}>Increase +</button>
      <br /> <br />
      <button onClick={reset}>Reset</button>

      <Eg />
    </> 

  )
}

export default App
