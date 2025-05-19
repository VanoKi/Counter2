type Props = {
  title: string
  className: string
  onClick: () => void
  disabled?: boolean
};
export const Button = (props: Props) => {
  const {title, className, onClick, disabled} = props
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};