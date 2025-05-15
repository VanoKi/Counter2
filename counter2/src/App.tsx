import {type ChangeEvent, use, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let min = 0
  let max = 3

  let [minVal, setMinVal] = useState(min)
  let [maxVal, setMaxVal] = useState(max)
  console.log(minVal, maxVal)
  let [count, setCount] = useState(minVal)
  console.log(`count is: `, count)
  const [tempMin, setTempMin] = useState(minVal)
  const [tempMax, setTempMax] = useState(maxVal)
  
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

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>,
                           setter: (value:number) => void) => {
    setter(Number(e.currentTarget.value))
  }
  const setValue = () => {
    setMinVal(tempMin)
    setMaxVal(tempMax)
    setCount(tempMin)
  }

  return (
    <>
      <div className={'input-panel'}>
        <div>
          <label>
            minVal:
            <input
              id={'minVal'}
              value={tempMin}
              type={'number'}
              onChange={(e) => onChangeHandler(e, setTempMin)}></input>
          </label>
        </div>
        <div>
          <label>
            minVal:
            <input
              id={'maxVal'}
              value={tempMax}
              type={'number'}
              onChange={(e) => onChangeHandler(e, setTempMax)}></input>
          </label>
        </div>
        <button onClick={setValue}>set</button>
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
