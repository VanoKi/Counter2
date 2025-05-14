import {Button} from "./Button.tsx";

type Props = {
  minVal: number
  maxVal: number
  setMinVal: (val:number) => void
  setMaxVal: (val:number) => void
};

export const SetDisplay = (props: Props) => {
  const {minVal, maxVal, setMinVal, setMaxVal} = props
  const showValue = (val:string) => console.log(val)
  return (
    <>
      <div className={''}>
        <input
          type={"number"}
          value={minVal}
          onChange={(e) => showValue(e.target.value)}
        />
        <input
          type={"number"}
          value={maxVal}
        />
      </div>
      <div className={'btn-wrap'}>
        <Button title={'Set'}/>
      </div>
    </>
  );
};