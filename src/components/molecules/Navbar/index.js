'use client';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Arrow from '@/components/atoms/Icons/Arrow';
import { decrement } from '@/store/slices/stepperSlice';

const Navbar = ({ title = '-', arrowColor }) => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(decrement());

  return (
    <div className="w-full h-[68px] flex items-center rounded-t-[20px] px-[25px]">
      <div className="flex gap-[13px] items-center">
        <div className="cursor-pointer" onClick={onClick}>
          <Arrow color={arrowColor} />
        </div>
        <p className="font-semibold text-[18px] leading-[27px] text-[#101828]">{title}</p>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  arrowColor: PropTypes.string,
};

export default Navbar;
