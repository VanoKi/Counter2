import {Button} from "./Button.tsx";

type Props = {
  minVal: number
  maxVal: number
};

export const SetDisplay = (props: Props) => {
  const [minVal, maxVal] = props
  return (
    <>
      <div className={''}>
        <input type={"number"} value={minVal}/>
        <input type={"number"} value={maxVal}/>
      </div>
      <div className={'btn-wrap'}>
        <Button title={'Set'}/>
      </div>
    </>
  );
};