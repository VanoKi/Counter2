import { useState } from 'react'
import './App.css'
// import {SetDisplay} from "./components/setDisplay.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";

function App() {
  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(5)
  // const [val, setVal] = useState(0)

  return (
    <div className={'app'}>
      {/*<SetDisplay minVal={minVal} maxVal={maxVal} setMinVal={() => setMinVal(minVal)}/>*/}
      <CounterDisplay
        minVal={minVal}
        maxVal={maxVal}
        setMinVal={setMinVal}
        setMaxVal={setMaxVal}
      />
    </div>
  )
}

export default App
