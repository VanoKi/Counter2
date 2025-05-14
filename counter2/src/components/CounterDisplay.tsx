// @flow 
import * as React from 'react';
import {Button} from "./Button.tsx";

type Props = {
  
};
export const CounterDisplay = (props: Props) => {
  return (
    <div className={'counter-display'}>
      <div className={'display'} >
        <span></span>
      </div>
      <div className={'btn-wrap'}>
        <Button title={'increment'}/>
        <Button title={'reset'}/>
      </div>
    </div>
  );
};