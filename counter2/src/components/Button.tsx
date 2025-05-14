// @flow 
import * as React from 'react';

type Props = {
  title: string
  callBack: () => void

};
export const Button = (props: Props) => {
  const {title, callBack} = props
  return (
    <button
      title={title}
      onClick={callBack}
    >
    </button>
  );
};