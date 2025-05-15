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

  return (
    <>
      <div className={'counter'}>
        <div>
          <span>{count}</span>
        </div>
        <div>
          <button onClick={incVal}>increment</button>
          <button onClick={resetVal}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App
