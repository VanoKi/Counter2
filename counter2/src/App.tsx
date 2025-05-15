import { useState } from 'react'
import './App.css'
import {SetDisplay} from "./components/setDisplay.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";

function App() {
  // const [minVal, setMinVal] = useState(0)
  // const [maxVal, setMaxVal] = useState(3)
  const getFromLS = (key: string, defVal: number) => {
    const value = localStorage.getItem(key)
    return value !== null ? Number(value) : defVal
  }

  const [minVal, setMinVal] = useState(() => getFromLS('minVal', 0))
  const [maxVal, setMaxVal] = useState(() => getFromLS('maxVal', 3))

  const hasError = minVal < 0 || minVal > maxVal

  return (
    <div className={'app'}>
      <SetDisplay
        minVal={minVal}
        maxVal={maxVal}
        setMinVal={setMinVal}
        setMaxVal={setMaxVal}
      />
      <CounterDisplay
        minVal={minVal}
        maxVal={maxVal}
        setMinVal={setMinVal}
        setMaxVal={setMaxVal}
        hasError={hasError}
      />
    </div>
  )
}

export default App
