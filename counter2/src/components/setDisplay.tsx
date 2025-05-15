import {Button} from "./Button.tsx";
import {useEffect, useState} from "react";
import {Input} from "./Input.tsx";

type Props = {
  minVal: number
  maxVal: number
  setMinVal: (val:number) => void
  setMaxVal: (val:number) => void
};

export const SetDisplay = (props: Props) => {

  const {minVal, maxVal, setMinVal, setMaxVal} = props
  const [tempMin, setTempMin] = useState(minVal)
  const [tempMax, setTempMax] = useState(maxVal)

  const isChanged = tempMin !== minVal || tempMax !== maxVal
  const isInvalid = tempMin < 0 || tempMin >= tempMax
  const disabletSet = !isChanged || isInvalid

  const onSetHandler = () => {
    setMinVal(tempMin)
    setMaxVal(tempMax)
  }

  return (
      <div className={'set-display'}>
        <Input title={'max value'} value={tempMax} onChange={setTempMax}/>
        <Input title={'start value'} value={tempMin} onChange={setTempMin}/>
        <div className={'btn-wrap'}>
          <Button title={'Set'} callBack={onSetHandler} disabled={disabletSet}/>
        </div>
      </div>
  );
};