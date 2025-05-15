import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let minVal = 0
  let maxVal = 3
  let [count, setCount] = useState(minVal)
  console.log(`count is: `, count)
  
  const incVal = () => {
    if (count < maxVal) {
      setCount(count + 1)
    }
  }

  const resetVal = () => {
    setCount(minVal)
  }

  const isIncDisabled = count === maxVal
  const isResetDisabled = count === minVal

  return (
    <>
      <div className={'counter'}>
        <div>
          <span className={isIncDisabled ? 'red' : ''} >{count}</span>
        </div>
        <div>
          <button onClick={incVal} disabled={isIncDisabled}>increment</button>
          <button onClick={resetVal} disabled={isResetDisabled}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App
