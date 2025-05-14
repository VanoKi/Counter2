import type {ChangeEvent} from "react";

type Props = {
  title: string
  value: number
};
export const Input = (props: Props) => {
  const {title, value} = props
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

  }
  return (
    <label>
      <span>{title}</span>
      <input
        type={'number'}
        value={value}
        onChange={ (e) => {(Number(e.currentTarget.value))}}
      />
    </label>
  );
};