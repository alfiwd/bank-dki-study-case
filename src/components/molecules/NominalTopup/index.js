import Wallet from '@/components/atoms/Icons/Wallet';
import { convertToRupiah } from '@/utils/convertToRupiah';

const NominalTopUp = ({ nominal, id, selectedId, onClick }) => {
  return (
    <div
      className={`rounded-lg p-2 h-[56px] flex items-center gap-3 border ${
        selectedId === id ? 'border-[#E21A1A]' : 'border-[#E0E0E0]'
      }`}
      onClick={() => onClick(id)}
    >
      <div className="w-[40px] h-[40px] p-2 flex justify-center items-center rounded-full bg-[#0055B81A]">
        <Wallet />
      </div>
      <p className="text-[#041C2C] font-semibold text-[14px] leading-[21px]">
        {convertToRupiah(nominal)}
      </p>
    </div>
  );
};

export default NominalTopUp;
