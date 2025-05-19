import type {PropsWithChildren} from "react";

export const ButtonWrap = ({children}: PropsWithChildren) => {
  return (
    <div className={'btn-wrap'}>
      {children}
    </div>
  );
};