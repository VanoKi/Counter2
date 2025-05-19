import type {ReactNode} from "react";

type Props = {
  displayCount: () => ReactNode
};
export const Display = ({displayCount}: Props) => {
  return (
    <div className={'display'}>
      {displayCount()}
    </div>
  );
};