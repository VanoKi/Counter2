import {type ChangeEvent, useState} from 'react'
import './App.css'

function App() {
  let min = 0
  let max = 3
  let errorMessage = 'Incorrect Value!'

  const [error, setError] = useState(false)

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

  const hasError = tempMin < 0 || tempMax <= tempMin
  const minTnputError = tempMin < 0 || tempMin >= tempMax
  const maxInputError = tempMax <= tempMin || tempMax < 0

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
              className={minTnputError ? 'input-error' : ''}
              id={'minVal'}
              value={tempMin}
              type={'number'}
              onChange={(e) => onChangeHandler(e, setTempMin)}></input>
          </label>
        </div>
        <div>
          <label>
            maxVal:
            <input
              className={maxInputError ? 'input-error' : ''}
              id={'maxVal'}
              value={tempMax}
              type={'number'}
              onChange={(e) => onChangeHandler(e, setTempMax)}></input>
          </label>
        </div>
        <button onClick={setValue} disabled={hasError}>set</button>
      </div>
      <div className={'counter'}>
        <div>
          <span className={isIncDisabled ? 'red' : ''} >{!hasError ? count : errorMessage}</span>
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
