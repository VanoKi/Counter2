import {type ChangeEvent, use, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let min = 0
  let max = 3

  let [minVal, setMinVal] = useState(min)
  let [maxVal, setMaxVal] = useState(max)
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

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value)

  }

  return (
    <>
      <div className={'input-panel'}>
        <div>
          <label htmlFor={'minVal'}>minVal</label>
          <input id={'minVal'} value={minVal} type={'number'} onChange={onChangeHandler}></input>
        </div>
        <div>
          <label htmlFor={'maxVal'}>minVal</label>
          <input id={'maxVal'} value={maxVal} type={'number'} onChange={onChangeHandler}></input>
        </div>
        <button>set</button>
      </div>
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
