import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
  minVal: number
  maxVal: number
  setMinVal: (val: number) => void
  setMaxVal: (val: number) => void
  hasError: boolean
};

export const CounterDisplay = (props: Props) => {

  const {minVal, maxVal, hasError} = props
  let [val, setVal] = useState(minVal)

  const incVal = () => {
    if (val < maxVal) {
      val = val + 1
      setVal(val)
      console.log(val)
    }
  }

  const resetVal = () => {
    setVal(minVal)
  }

  // if (val < minVal || val > maxVal) {
  //   setVal(minVal)
  // }

  return (
    <div className={'counter-display'}>
      <div className={'display'} >
        {hasError ? (
          <span className={'error'}>Incorrect Value!</span>
        ) : (
          <span>{val}</span>
          )}
      </div>
      <div className={'btn-wrap'}>
        <Button title={'increment'} callBack={incVal} disabled={val ===maxVal}/>
        <Button title={'reset'} callBack={resetVal} disabled={val === minVal} />
      </div>
    </div>
  );
};