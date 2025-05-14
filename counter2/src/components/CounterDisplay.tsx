import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
  
};
export const CounterDisplay = (props: Props) => {
  let minVal = 0
  let maxVal = 5
  let [val, setVal] = useState(minVal)

  const incVal = () => {
    if (val < maxVal) {
      val = val + 1
      setVal(val)
    }
  }

  const resetVal = () => {
    setVal(minVal)
  }

  return (
    <div className={'counter-display'}>
      <div className={'display'} >
        <span>{val}</span>
      </div>
      <div className={'btn-wrap'}>
        <Button title={'increment'} callBack={() => incVal()} disabled={val==maxVal}/>
        <Button title={'reset'} callBack={resetVal} disabled={val === minVal}/>
      </div>
    </div>
  );
};