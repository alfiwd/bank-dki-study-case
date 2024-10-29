import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import LrtLogo from '@/components/atoms/LrtLogo';
import Navbar from '@/components/molecules/Navbar';
import SplitInput from '@/components/molecules/SplitInput';
import Copyright from '@/components/molecules/Copyright';
import successIllustration from '@/assets/images/success_illustration.webp';
import { increment } from '@/store/slices/stepperSlice';
import { setPin as setPinAction } from '@/store/slices/pinSlice';

const PinInput = () => {
  const dispatch = useDispatch();

  const [pin, setPin] = useState([]);

  const handleOnComplete = (value) => {
    dispatch(increment());
    dispatch(setPinAction(value));
  };

  return (
    <>
      <Navbar title="LRT  X JakOne Pay" />
      <div className="px-[25px] py-3 flex flex-1 flex-col justify-between">
        <div className="flex flex-col items-center gap-[42px]">
          <div className="flex flex-col gap-[25px]">
            <div className="flex justify-center">
              <LrtLogo />
            </div>
            <p className="text-[#061127] text-[18px] leading-[27px] text-center">Buat PIN kamu!</p>
            <SplitInput
              onComplete={handleOnComplete}
              number={pin}
              setNumber={setPin}
              containerClassName="!gap-[11px]"
              inputClassName="w-[45px] h-[50px] border !border-[#D4431C]"
            />
          </div>
          <div className="flex flex-col items-center gap-[11px]">
            <Image src={successIllustration} width={238} height={219} alt="success illustration" />
            <p className="w-[181px] text-center text-[15px] leading-[23px]">
              Seluruh informasi kamu terlindungi
            </p>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default PinInput;
