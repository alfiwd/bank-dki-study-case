'use client';

import { useSelector } from 'react-redux';

import TopUpMethods from '@/components/organisms/TopUpMethods';
import SelectTopUpNominal from '@/components/organisms/SelectTopUpNominal';

const TopUp = () => {
  const step = useSelector((state) => state.stepper.value);

  let component;

  switch (step) {
    case 0:
      component = <TopUpMethods />;
      break;
    case 1:
      component = <SelectTopUpNominal />;
      break;
  }

  return (
    <div className="flex justify-center bg-gray-400">
      <div className="h-screen flex flex-col w-full max-w-[375px] bg-white overflow-hidden">
        {component}
      </div>
    </div>
  );
};

export default TopUp;
