import React from 'react';
import { useDispatch } from 'react-redux';

import Mobile from '@/components/atoms/Icons/Mobile';
import Atm from '@/components/atoms/Icons/Atm';
import Bank from '@/components/atoms/Icons/Bank';
import CreditCard from '@/components/atoms/Icons/CreditCard';
import Navbar from '@/components/molecules/Navbar';
import TopUpItem from '@/components/molecules/TopUpItem';
import TopUpTitle from '@/components/molecules/TopUpTitle';
import { increment } from '@/store/slices/stepperSlice';
import { setTopUpType } from '@/store/slices/topUpSlice';

const TopUpMethods = () => {
  const dispatch = useDispatch();
  const topUpItems = [
    {
      icon: <Mobile />,
      title: 'JakOne Mobile',
      description: 'No administration fees via the JakOne Mobile Mobile App',
    },
    {
      icon: <Atm />,
      title: 'ATM Bank DKI',
      description: 'Top up Martipay from  nearest Bank DKI ATM',
    },
    {
      icon: <Bank />,
      title: 'Other Bank ',
      description: 'Transfer anytime from your favourite Indonesia bank',
    },
    {
      icon: <CreditCard />,
      title: 'Debit Card',
      description: 'Top up online using your debit card ',
    },
  ];

  const handleOnArrowClick = (data) => {
    dispatch(increment());
    dispatch(setTopUpType(data));
  };

  return (
    <>
      <Navbar title="Top Up LRTJPay" arrowColor="#000" />
      <div className="p-4 flex flex-col gap-12">
        <TopUpTitle title="Top Up Methods" />
        <div className="flex flex-col gap-4">
          {topUpItems.map((item, index) => (
            <React.Fragment key={index}>
              <TopUpItem
                icon={item.icon}
                title={item.title}
                description={item.description}
                onArrowClick={() => handleOnArrowClick(item.title)}
              />
              <div className="border" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopUpMethods;
