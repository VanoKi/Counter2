import type {PropsWithChildren} from "react";

export const InputPanel = ({children}: PropsWithChildren) => {
  return (
    <div className={'input-panel'}>
      {children}
    </div>
  );
};