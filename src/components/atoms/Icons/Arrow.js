import PropTypes from "prop-types";

const Arrow = ({ size = 30, color = "#E21A1A" }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9625 7.41251L4.375 15L11.9625 22.5875" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25.625 15H4.58752" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Arrow.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Arrow;
