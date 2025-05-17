import {type ChangeEvent, useState} from 'react'
import './App.css'

function App() {
  const storeMin = localStorage.getItem('minVal')
  const storeMax = localStorage.getItem('maxVal')
  const intialMin = storeMin ? Number(storeMin) : 1
  const intialMax = storeMax ? Number(storeMax) : 2

  const errorMessage = 'Incorrect Value!'
  const correctValue = 'Enter values and press set'

  const [minVal, setMinVal] = useState(intialMin)
  const [maxVal, setMaxVal] = useState(intialMax)
  // console.log(minVal, maxVal)
  const [count, setCount] = useState(intialMin)
  // console.log(`count is: `, count)
  const [tempMin, setTempMin] = useState(intialMin)
  const [tempMax, setTempMax] = useState(intialMax)
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

  const displayCount = () => {
    if(hasError) {
      return <span className={'red'}>{errorMessage}</span>
    } else if (isSetDisabled) {
      return <span className={isIncDisabled ? 'red' : ''}>{count}</span>
    } else {
      return <span>{correctValue}</span>
    }
  }

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

    localStorage.setItem('minVal', String(tempMin))
    localStorage.setItem('maxVal', String(tempMax))
  }

  console.log(`is edit ${!isSetDisabled}`)

  return (
    <div className={'app'}>
      <div className={'input-panel'}>
          <label>
            start Value:
            <input
              className={minInputError ? 'input input-error' : 'input'}
              id={'minVal'}
              value={tempMin}
              type={'number'}
              onChange={(e) => onChangeHandler(e, setTempMin)}></input>
          </label>
          <label>
            max Value:
            <input
              className={maxInputError ? 'input input-error' : 'input'}
              id={'maxVal'}
              value={tempMax}
              type={'number'}
              onChange={(e) => onChangeHandler(e, setTempMax)}></input>
          </label>
        <div className={'btn-wrap'}>
          <button className={'btn'} onClick={setValue} disabled={hasError || isSetDisabled}>set</button>
        </div>
      </div>
      <div className={'counter'}>
        <div className={'display'}>
          {displayCount()}
        </div>
        <div className={'btn-wrap'}>
          <button className={'btn'} onClick={incVal} disabled={isIncDisabled || hasError}>increment</button>
          <button className={'btn'} onClick={resetVal} disabled={isResetDisabled || hasError}>reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
