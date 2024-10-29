import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import LrtLogo from '@/components/atoms/LrtLogo';
import Navbar from '@/components/molecules/Navbar';
import SplitInput from '@/components/molecules/SplitInput';
import Copyright from '@/components/molecules/Copyright';
import Modal from '@/components/molecules/Modal';
import SplashScreen from '@/components/molecules/SplashScreen';
import { reset } from '@/store/slices/stepperSlice';

const ConfirmationPinInput = () => {
  const newPin = useSelector((state) => state.pin.value);
  const router = useRouter();
  const dispatch = useDispatch();

  const [pin, setPin] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(false);

  const handleOnComplete = (value) => {
    if (value !== newPin) {
      setModalVisible(true);
    } else {
      setSplashScreenVisible(true);
      router.push('/top-up');
      setTimeout(() => {
        dispatch(reset());
        setSplashScreenVisible(false);
      }, 3000);
    }
  };
  const handleOnModalClick = () => {
    setPin(Array(6).fill(''));
    setModalVisible(false);
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
            <p className="text-[#061127] text-[18px] leading-[27px] text-center">
              Konfirmasi PIN kamu!
            </p>
            <SplitInput
              onComplete={handleOnComplete}
              number={pin}
              setNumber={setPin}
              containerClassName="!gap-[11px]"
              inputClassName="w-[45px] h-[50px] border !border-[#D4431C]"
            />
          </div>
          <p className="text-[#061127] text-[18px] leading-[27px] text-center">
            Konfirmasi PIN kamu!
          </p>
        </div>
        <Copyright />
      </div>
      <Modal
        visible={modalVisible}
        onClick={handleOnModalClick}
        message="PIN yang kamu masukkan TIDAK SESUAI"
      />
      <SplashScreen visible={splashScreenVisible} />
    </>
  );
};

export default ConfirmationPinInput;
