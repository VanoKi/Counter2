import type {ChangeEvent} from "react";

type Props = {
  title: string
  value: number
  onChange: (value: number) => void
  hasError?: boolean
};
export const Input = (props: Props) => {
  const {title, value, onChange, hasError} = props
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.currentTarget.value))
  }
  return (
    <label>
      <span>{title}</span>
      <input
        className={hasError ? 'input-error' : 'input'}
        type={'number'}
        value={value}
        onChange={onChangeHandler}
        aria-invalid={hasError}
      />
    </label>
  );
};