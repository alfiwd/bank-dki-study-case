import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '@/components/molecules/Navbar';
import TopUpTitle from '@/components/molecules/TopUpTitle';
import Announcement from '@/components/molecules/Announcement';
import NominalTopUp from '@/components/molecules/NominalTopup';
import Button from '@/components/atoms/Button';
import TopUpInput from '@/components/molecules/TopUpInput';
import { setTopUpAmount } from '@/store/slices/topUpSlice';

const SelectTopUpNominal = () => {
  const [selectedNominal, setSelectedNominal] = useState(null);

  const dispatch = useDispatch();
  const topUpType = useSelector((state) => state.topUp.topUpType);
  const topUpAmount = useSelector((state) => state.topUp.topUpAmount);
  const topUpTitle = `Via ${topUpType}`;
  const nominalTopUp = [...Array(6)].map((_, index) => {
    return {
      id: index + 1,
      nominal: (index + 1) * 50000,
    };
  });
  const isNextButtonDisabled = !selectedNominal && topUpAmount === 0;

  const handleOnNominalTopUpClick = (id) => {
    setSelectedNominal(id);
    dispatch(setTopUpAmount(0));
  };

  useEffect(() => {
    topUpAmount !== 0 && setSelectedNominal(null);
  }, [topUpAmount]);

  return (
    <>
      <Navbar title="Top Up LRTJPay" arrowColor="#000" />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="p-4 flex flex-col gap-4">
            <TopUpTitle title={topUpTitle} />
            <Announcement />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 border">
            {nominalTopUp.map((item) => (
              <NominalTopUp
                key={item.id}
                nominal={item.nominal}
                id={item.id}
                selectedId={selectedNominal}
                onClick={handleOnNominalTopUpClick}
              />
            ))}
          </div>
          <div className="p-4">
            <TopUpInput />
          </div>
        </div>
        <div className="w-full p-4">
          <Button size="medium" className="w-full" disabled={isNextButtonDisabled}>
            <p>Next</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SelectTopUpNominal;
