import {type ChangeEvent, useState} from 'react'
import './App.css'

function App() {
  let min = 1
  let max = 2
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

  const minTnputError = tempMin < 0 || tempMin >= tempMax
  const maxInputError = tempMax <= tempMin || tempMax < 0
  const hasError = tempMin < 0 || tempMax <= tempMin


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
          <label>
            start Value:
            <input
              className={minTnputError ? 'input-error' : 'input'}
              id={'minVal'}
              value={tempMin}
              type={'number'}
              onChange={(e) => onChangeHandler(e, setTempMin)}></input>
          </label>
          <label>
            max Value:
            <input
              className={maxInputError ? 'input-error' : 'input'}
              id={'maxVal'}
              value={tempMax}
              type={'number'}
              onChange={(e) => onChangeHandler(e, setTempMax)}></input>
          </label>
        <div className={'btn-wrap'}>
          <button onClick={setValue} disabled={hasError}>set</button>
        </div>
      </div>
      <div className={'counter'}>
        <div>
          <span className={isIncDisabled ? 'red' : ''}>{!hasError ? count : errorMessage}</span>
        </div>
        <div className={'btn-wrap'}>
          <button onClick={incVal} disabled={isIncDisabled || hasError}>increment</button>
          <button onClick={resetVal} disabled={isResetDisabled || hasError}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App
