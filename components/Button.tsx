interface ButtonProps {
  label?: string;
  // children?: React.ReactNode;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { label } = props;
  return (
    <div>
      <button className='btn btn-lg btn-secondary px-5'>{label}</button>
    </div>
  );
};

export default Button;
