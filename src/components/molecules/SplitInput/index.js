'use client';

import { useEffect } from 'react';

const SplitInput = ({
  number = [],
  length = 6,
  timeLeft = 10,
  setNumber = () => {},
  onComplete = () => {},
  setTimeLeft = () => {},
  containerClassName = '',
  inputClassName = '',
}) => {
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...number];
    newOtp[index] = value;
    setNumber(newOtp);

    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    if (newOtp.every((num) => num !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !number[index]) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    setNumber(Array(length).fill(''));
  }, []);

  return (
    <div className={`flex gap-[32px] ${containerClassName}`}>
      {number?.map((_, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={number[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          className={`w-[23px] h-10 border-b-2 border-gray-300 text-center text-lg ${inputClassName}`}
        />
      ))}
    </div>
  );
};

export default SplitInput;
