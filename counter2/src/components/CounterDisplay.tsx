// @flow 
import * as React from 'react';
import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
  
};
export const CounterDisplay = (props: Props) => {
  let minVal = 0
  let maxVal = 5
  let [val, setVal] = useState(minVal)

  const incVal = (minVal:number, maxVal:number) => {
    if (val < maxVal) {
      val = val + 1
      setVal(val)
    }
  }

  return (
    <div className={'counter-display'}>
      <div className={'display'} >
        <span>{val}</span>
      </div>
      <div className={'btn-wrap'}>
        <Button title={'increment'} callBack={() => incVal(minVal, maxVal)}/>
        <Button title={'reset'}/>
      </div>
    </div>
  );
};