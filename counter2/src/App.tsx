import {type ChangeEvent, useState} from 'react'
import './App.css'
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";
import {ButtonWrap} from "./components/ButtonWrap.tsx";

function App() {
  const storeMin = localStorage.getItem('minVal')
  const storeMax = localStorage.getItem('maxVal')
  const intialMin = storeMin ? Number(storeMin) : 1
  const intialMax = storeMax ? Number(storeMax) : 2

  const errorMessage = 'Incorrect Value!'
  const correctValue = 'Enter values and press set'

  const [minVal, setMinVal] = useState(intialMin)
  const [maxVal, setMaxVal] = useState(intialMax)
  const [count, setCount] = useState(intialMin)
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
        <Input
          title={'Start Value'}
          className={minInputError ? 'input input-error' : 'input'}
          value={tempMin}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e, setTempMin)}
        />
        <Input
          title={'Max Value'}
          className={maxInputError ? 'input input-error' : 'input'}
          value={tempMax}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e, setTempMax)}
        />
        <ButtonWrap>
          <Button title={'set'} className={'btn'} onClick={setValue} disabled={hasError || isSetDisabled}/>
        </ButtonWrap>
      </div>
      <div className={'counter'}>
        <div className={'display'}>
          {displayCount()}
        </div>
        <ButtonWrap>
          <Button title={'Increment'} className={'btn'} onClick={incVal} disabled={isIncDisabled || hasError}/>
          <Button title={'Reset'} className={'btn'} onClick={resetVal} disabled={isResetDisabled || hasError}/>
        </ButtonWrap>
      </div>
    </div>
  )
}

export default App
