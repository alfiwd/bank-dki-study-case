'use client';

import Arrow from '@/components/atoms/Icons/Arrow';

const TopUpItem = ({ onArrowClick = () => {}, icon, title, description }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[18px]">
        <div>
          <div className="bg-gradient-to-r from-[#E21A1A] to-[#C0A720] size-[55px] flex justify-center items-center rounded-full">
            {icon}
          </div>
        </div>
        <div className="flex flex-col gap-[2px] w-[70%]">
          <p className="font-semibold text-[12px] leading-[18px]">{title}</p>
          <p className="text-[12px] leading-[15px]">{description}</p>
        </div>
      </div>
      <div className="rotate-180 cursor-pointer" onClick={onArrowClick}>
        <Arrow color="#000" />
      </div>
    </div>
  );
};

export default TopUpItem;
