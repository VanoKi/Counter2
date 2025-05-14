type Props = {
  title: string
  value: number
};
export const Input = (props: Props) => {
  const {title, value} = props
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