interface ButtonProps {
  label?: string;
  // children?: React.ReactNode;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { label } = props;
  // const btnLabel = {"--btnLabel": label } as React.CSSProperties;
  return (
    <div className="text-center">
      <button data-label={label} className="button">
        {label}
      </button>

      <style jsx>{`
        /*Colors */
        $pink: #f3356c;

        .button::before {
          align-items: center;
          background-color: var(--blue);
          border: none;
          border-radius: calc(2 * 17px);
          color: var(--white);
          content: attr(data-label);
          display: inline-flex;
          font-size: 17px;
          height: 55px;
          justify-content: center;
          left: 0;
          position: absolute;
          top: 0;
          transition: all 0.5s ease-in-out;
          width: 260px;
        }

        .button:hover::before {
          left: -260px;
        }

        .button {
          background-color: $pink;
          border: none;
          border-radius: calc(2 * 17px);
          color: var(--white);
          cursor: pointer;
          font-size: 0px;
          height: 55px;
          outline: none;
          overflow: hidden;
          position: relative;
          transition: all 0.5s ease-in-out;
          width: 260px;
        }

        .button:hover {
          font-size: 17px;
        }
      `}</style>
    </div>
  );
};

export default Button;
