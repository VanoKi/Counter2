import type {ChangeEvent} from "react";

type Props = {
  title: string
  className: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
};
export const Input = (props: Props) => {
  const {title, className, value, onChange} = props
  return (
    <label>
      {title}
      <input
        className={className}
        type={'number'}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};