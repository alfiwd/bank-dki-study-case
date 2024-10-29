import { useRef } from 'react';
import moment from 'moment';

const DatePicker = ({
  placeholder = '',
  value = '',
  name = '',
  onChange = () => {},
  error = '',
}) => {
  const dateInputRef = useRef(null);
  const trueValue = moment(value, 'YYYY-MM-DD').format('DD-MM-YYYY');

  const handleOnClick = () => {
    dateInputRef.current.showPicker();
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="rounded-md bg-[#f7f7f7] px-[14px] py-3 w-full h-[45px]"
        onClick={handleOnClick}
      >
        <p className={`text-[14px] leading-[21px] ${value ? 'text-black' : 'text-[#9CA3AF]'}`}>
          {value ? trueValue : placeholder}
        </p>
        <input
          type="date"
          id={name}
          name={name}
          className="outline-none w-0 h-0"
          onChange={onChange}
          ref={dateInputRef}
          value={
            moment(value, 'YYYY-MM-DD', true).isValid() ? moment(value).format('YYYY-MM-DD') : ''
          }
        />
      </div>
      {error && <p className="text-[12px] text-[#E21A1A]">{error}</p>}
    </div>
  );
};

export default DatePicker;
