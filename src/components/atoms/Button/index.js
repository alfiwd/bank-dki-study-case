import PropTypes from 'prop-types';

import { mc } from '@/utils/mc';

const Button = ({
  children,
  size = 'small',
  variant = 'primary',
  onClick = () => {},
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const sizeClassName = {
    small: 'h-[30px] px-[9px] py-[6px]',
    medium: 'h-[45px] px-[18px] py-[12px]',
  };
  const baseClassName = 'flex justify-center items-center cursor-pointer rounded-[5px]';
  const variantClassName = {
    primary:
      'bg-[#E21A1A] hover:bg-[#E21A1AB5] text-white disabled:bg-[#EBECEE] disabled:text-[#BDBDBD]',
  };
  const buttonClassName = mc(
    baseClassName,
    sizeClassName[size],
    variantClassName[variant],
    className
  );

  return (
    <button onClick={onClick} className={buttonClassName} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
