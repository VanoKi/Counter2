import type {ChangeEvent} from "react";

type Props = {
  title: string
  value: number
  onChange: (value: number) => void
};
export const Input = (props: Props) => {
  const {title, value} = props
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }
  return (
    <label>
      <span>{title}</span>
      <input
        type={'number'}
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
};