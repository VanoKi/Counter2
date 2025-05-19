import type {ReactNode} from "react";

type Props = {
  children: ReactNode
};
export const ButtonWrap = ({children}: Props) => {
  return (
    <div className={'btn-wrap'}>
      {children}
    </div>
  );
};