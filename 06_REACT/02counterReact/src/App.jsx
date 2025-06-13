import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // here the 'counter' is the variable and the 'setCounter' is the function/method. the setCounter is the function which is responsible to update the couter.
  // and in the counter variable the default value is 0 for now, it can be anything as well.
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>React Learning</h1>
      <h3>Counter Value: {counter}</h3>
      <button
        onClick={addValue}
      >Add Value</button> <br/> <br/>
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
