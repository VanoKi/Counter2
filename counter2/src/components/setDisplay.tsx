import {Button} from "./Button.tsx";
import {useState} from "react";
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

  const onSetHandler = () => {
    setMinVal(tempMin)
    setMaxVal(tempMax)
  }

  return (
      <div className={'set-display'}>
        {/*<input*/}
        {/*  type={"number"}*/}
        {/*  value={minVal}*/}
        {/*  onChange={(e) => setTempMin(Number(e.target.value))}*/}
        {/*  onFocus={() => setTempMin(NaN)}*/}
        {/*/>*/}
        {/*<input*/}
        {/*  type={"number"}*/}
        {/*  value={maxVal}*/}
        {/*  onChange={(e) => setTempMax(Number(e.target.value))}*/}
        {/*  onFocus={() => setTempMax(NaN)}*/}
        {/*/>*/}
        <Input title={'max value'} value={maxVal} onChange={setMaxVal}/>
        <Input title={'start value'} value={minVal} onChange={setTempMin}/>
        <div className={'btn-wrap'}>
          <Button title={'Set'} callBack={onSetHandler}/>
        </div>
      </div>
  );
};