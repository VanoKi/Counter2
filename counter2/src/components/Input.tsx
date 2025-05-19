import type {ChangeEvent} from "react";

type Props = {
  title: string
  className: string
  type: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>, setTempMin) => void
};
export const Input = (props: Props) => {
  const {title, className, value, onChange, setTempMin} = props
  return (
    <label>
      {title}
      <input
        className={className}
        type={'number'}
        value={value}
        onChange={(e, setTempMin) => onChange}
      />
    </label>
  );
};