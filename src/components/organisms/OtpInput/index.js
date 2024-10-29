'use client';

import { useDispatch } from 'react-redux';

import Navbar from '@/components/molecules/Navbar';
import SplitInput from '@/components/molecules/SplitInput';
import { increment } from '@/store/slices/stepperSlice';
import { useState } from 'react';
import Modal from '@/components/molecules/Modal';
import SplashScreen from '@/components/molecules/SplashScreen';

const OtpInput = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [otp, setOtp] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(false);

  const timer = String(timeLeft).padStart(2, '0');
  const dispatch = useDispatch();

  const handleOnComplete = (data) => {
    if (data !== '111111') {
      setModalVisible(true);
    } else {
      setSplashScreenVisible(true);
      setTimeout(() => {
        dispatch(increment());
        setSplashScreenVisible(false);
      }, 3000);
    }
  };
  const handleOnKirimKodeClick = () => {
    setOtp(Array(6).fill(''));
    setTimeLeft(10);
  };
  const handleOnModalClick = () => {
    setModalVisible(false);
    setOtp(Array(6).fill(''));
  };

  return (
    <>
      <Navbar title="Verifikasi Kode OTP" />
      <div className="px-[25px] py-8 flex flex-col gap-8 items-center">
        <div>
          <p className="text-[14px] leading-[21px] font-medium">
            Masukkan 6 digit kode yang sudah dikirim ke nomor kamu dibawah ini ya!
          </p>
          <p className="text-[14px] leading-[21px] font-medium text-[#E21A1A]">085839328544</p>
        </div>
        <SplitInput
          onComplete={handleOnComplete}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          number={otp}
          setNumber={setOtp}
        />
        <div className="flex flex-col gap-3 items-center">
          <p className="text-[#344054] font-semibold text-[14px] leading-[21px] text-center">
            Tidak terima code?
          </p>
          <p className="text-[#344054] text-[12px] leading-[18px] text-center">
            Kirim kode kembali dalam 00:{timer}
          </p>
          {timeLeft === 0 && (
            <p
              className="text-[#344054] text-[12px] leading-[18px] text-center underline cursor-pointer w-max"
              onClick={handleOnKirimKodeClick}
            >
              Kirim kode
            </p>
          )}
        </div>
      </div>
      <Modal
        visible={modalVisible}
        onClick={handleOnModalClick}
        message="OTP yang kamu masukkan TIDAK SESUAI"
      />
      <SplashScreen visible={splashScreenVisible} />
    </>
  );
};

export default OtpInput;
