'use client';

import { useSelector } from 'react-redux';

import PhoneNumberInput from '@/components/organisms/PhoneNumberInput';
import OtpInput from '@/components/organisms/OtpInput';
import RegisterForm from '@/components/organisms/RegisterForm';
import PinInput from '@/components/organisms/PinInput';
import ConfirmationPinInput from '@/components/organisms/ConfirmationPinInput';

export default function Home() {
  const step = useSelector((state) => state.stepper.value);

  let component;

  switch (step) {
    case 0:
      component = <PhoneNumberInput />;
      break;
    case 1:
      component = <OtpInput />;
      break;
    case 2:
      component = <RegisterForm />;
      break;
    case 3:
      component = <PinInput />;
      break;
    case 4:
      component = <ConfirmationPinInput />;
      break;
  }

  return (
    <div className="flex justify-center bg-gray-400">
      <div className="h-screen flex flex-col w-full max-w-[375px] bg-white overflow-hidden">
        {component}
      </div>
    </div>
  );
}
