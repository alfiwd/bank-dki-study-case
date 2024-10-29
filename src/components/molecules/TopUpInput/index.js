import { useDispatch, useSelector } from 'react-redux';

import Info from '@/components/atoms/Icons/Info';
import { setTopUpAmount } from '@/store/slices/topUpSlice';

const TopUpInput = () => {
  const minimumAmount = 20000;
  const dispatch = useDispatch();

  const topUpAmount = useSelector((state) => state.topUp.topUpAmount);

  const handleChange = (e) => {
    const value = parseInt(e.target.value.replace(/\D/g, '')) || 0;

    dispatch(setTopUpAmount(value));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-[#041C2C] text-[14px] leading-[21px]">
        Enter Another Amount
      </label>
      <div className="flex items-center gap-2">
        <span className="text-[28px] leading-[34px] font-bold">Rp</span>
        <input
          type="text"
          value={topUpAmount.toLocaleString('id-ID')}
          onChange={handleChange}
          className="text-[28px] leading-[34px] font-bold border-none focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-1">
        <Info />
        <p className="text-[#999999] text-[11px] leading-[17px]">
          Minimum top up amount Rp {minimumAmount.toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  );
};

export default TopUpInput;
