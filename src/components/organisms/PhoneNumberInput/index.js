'use client';

import { useDispatch } from 'react-redux';

import Button from '@/components/atoms/Button';
import Navbar from '@/components/molecules/Navbar';
import { increment } from '@/store/slices/stepperSlice';
import Copyright from '@/components/molecules/Copyright';
import LrtLogo from '@/components/atoms/LrtLogo';

const PhoneNumberInput = () => {
  const dispatch = useDispatch();

  const handleOnKirimOtpClick = () => dispatch(increment());

  return (
    <>
      <Navbar title="LRT X JakOne Pay" />
      <div className="w-full h-[80%] px-[25px] py-[11px] flex flex-col justify-between">
        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-col gap-[25px]">
            <div className="flex justify-center">
              <LrtLogo />
            </div>
            <p className="text-[#000000B2] text-[18px] leading-[27px] text-center">
              Selamat Datang
            </p>
            <p className="text-[#061127] text-[12px] leading-[18px]">
              Ekspresikan perjalananmu menggunakan LRT Pay
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-[28px]">
              <div className="flex flex-col gap-[5px]">
                <p className="text-[#061127] text-[12px] leading-[18px] font-bold">Nomor Telepon</p>
                <div className="border border-[#D4431C] p-4 h-[62px] flex justify-between items-center">
                  <p className="text-[#E21A1A] font-medium text-[14px] leading-[21px]">
                    085839328544
                  </p>
                  <Button onClick={handleOnKirimOtpClick}>
                    <p className="text-[12px] leading-[18px]">Kirim OTP</p>
                  </Button>
                </div>
              </div>
              <p className="text-[14px] leading-[21px]">
                Seluruh transaksi aman, dengan melanjutkan proses ini. Menu{' '}
                <span className="text-[#E21A1A] font-semibold">syarat & ketentuan</span> yang
                berlaku
              </p>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
};

PhoneNumberInput.propTypes = {};

export default PhoneNumberInput;
