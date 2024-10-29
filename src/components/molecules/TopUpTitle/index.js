import Wallet from '@/components/atoms/Icons/Wallet';

const TopUpTitle = ({ title = '-' }) => (
  <div className="flex items-center gap-3">
    <div className="w-[56px] h-[56px] p-2 flex justify-center items-center rounded-full bg-[#0055B81A]">
      <Wallet />
    </div>
    <p className="text-[#041C2C] font-bold text-[18px] leading-[22px]">{title}</p>
  </div>
);

export default TopUpTitle;
