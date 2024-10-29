import { useState } from 'react';

const Input = ({ error = '', onChange = () => {}, placeholder = '', ...props }) => {
  const [value, setValue] = useState('');

  const handleOnInputChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        className="rounded-md bg-[#f7f7f7] px-[14px] py-3 w-full text-[14px] leading-[21px]"
        onChange={handleOnInputChange}
        {...props}
      />
      {error && <p className="text-[12px] text-[#E21A1A]">{error}</p>}
    </div>
  );
};

export default Input;
