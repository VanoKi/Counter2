// @flow 
import * as React from 'react';

type Props = {
  title: string
  callBack?: () => void
  disabled?: boolean
};
export const Button = (props: Props) => {
  const {title, callBack, disabled} = props
  return (
    <button
      className={'btn'}
      onClick={callBack}
      disabled={disabled}
    >
      {title}
    </button>
  );
};