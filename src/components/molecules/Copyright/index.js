import Image from 'next/image';

import CopyrightIcon from '@/components/atoms/Icons/Copyright';
import bankDKILogo from '@/assets/images/logo_bank_dki.webp';

const Copyright = () => (
  <div className="flex gap-1 items-center justify-center">
    <CopyrightIcon />
    <p className="text-[12px] leading-[18px]">Powered by </p>
    <Image src={bankDKILogo} width={103} height={13} alt="bank dki logo" />
  </div>
);

export default Copyright;
