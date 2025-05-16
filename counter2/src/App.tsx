import {type ChangeEvent, useState} from 'react'
import './App.css'

function App() {
  let min = 1
  let max = 2
  let errorMessage = 'Incorrect Value!'

  let [minVal, setMinVal] = useState(min)
  let [maxVal, setMaxVal] = useState(max)
  console.log(minVal, maxVal)
  let [count, setCount] = useState(minVal)
  console.log(`count is: `, count)
  const [tempMin, setTempMin] = useState(minVal)
  const [tempMax, setTempMax] = useState(maxVal)
  const [isSetDisabled, setIsSetDisabled] = useState(true)
  
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

  const minInputError = tempMin < 0 || tempMin >= tempMax
  const maxInputError = tempMax <= tempMin || tempMax < 0
  const hasError = tempMin < 0 || tempMax <= tempMin


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>,
                           setter: (value:number) => void) => {
    setter(Number(e.currentTarget.value))
    setIsSetDisabled(false)
  }
  const setValue = () => {
    setMinVal(tempMin)
    setMaxVal(tempMax)
    setCount(tempMin)
    setIsSetDisabled(true)
  }

  return (
    <>
      <div className={'input-panel'}>
          <label>
            start Value:
            <input
              className={minInputError ? 'input-error' : 'input'}
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
          <button onClick={setValue} disabled={hasError || isSetDisabled}>set</button>
        </div>
      </div>
      <div className={'counter'}>
        <div>
          {hasError ? (
            <span className={'red'}>{errorMessage}</span>
          ) : (
            <span className={isIncDisabled ? 'red' : ''}>{count}</span>
          )}
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
