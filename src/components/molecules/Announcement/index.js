import AnnouncementIcon from '@/components/atoms/Icons/Announcement';

const Announcement = () => (
  <div className="bg-[#F2F6FA] p-3 rounded-[10px] flex gap-2">
    <div>
      <AnnouncementIcon />
    </div>
    <div className="flex flex-col gap-[2px]">
      <p className="text-[#E21A1A] font-bold text-[12px] leading-[18px]">Top Up Information</p>
      <p className="text-[12px] leading-[18px]">
        You can save up to Rp 2.000.000 with maximum transactions of Rp 20.000.000 per month
      </p>
    </div>
  </div>
);

export default Announcement;
