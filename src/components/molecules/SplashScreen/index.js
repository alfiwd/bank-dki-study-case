import PropTypes from 'prop-types';
import Image from 'next/image';

import bankDKILogo from '@/assets/images/logo_bank_dki.webp';

const SplashScreen = ({ visible = false }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#ffffff] flex justify-center items-center transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-between blink">
        <Image src={bankDKILogo} width={100} height={100} alt="bank dki logo" />
      </div>
    </div>
  );
};

SplashScreen.propTypes = {
  visible: PropTypes.bool,
};

export default SplashScreen;
