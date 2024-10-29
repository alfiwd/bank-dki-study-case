import PropTypes from 'prop-types';
import Button from '@/components/atoms/Button';

const Modal = ({ onClick = () => {}, visible = false, message = '' }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#ffffffb1] flex justify-center items-center transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="w-[252px] h-[234px] rounded-[20px] bg-white px-[35px] py-[26px] flex flex-col items-center justify-between"
        style={{ boxShadow: '1px 5px 5px grey' }}
      >
        <p className="text-[#061127] text-[15px] leading-[23px] text-center">{message}</p>
        <Button size="medium" className="w-[185px]" onClick={onClick}>
          Konfirmasi
        </Button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func,
  visible: PropTypes.bool,
  message: PropTypes.string,
};

export default Modal;
