import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let minVal = 0
  let maxVal = 3
  let [count, setCount] = useState(minVal)
  
  const incVal = () => {
    if (count < maxVal) {
      setCount(count + 1)
    }
  }

  return (
    <>
      <div className={'counter'}>
        <div>
          <span>{count}</span>
        </div>
        <div>
          <button onClick={incVal}>increment</button>
          <button>reset</button>
        </div>
      </div>
    </>
  )
}

export default App
