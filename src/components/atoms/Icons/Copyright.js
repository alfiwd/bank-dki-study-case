import PropTypes from 'prop-types';

const CopyrightIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="14" height="14" fill="url(#pattern0_1_871)" />
    <defs>
      <pattern id="pattern0_1_871" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_1_871" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_1_871"
        width="90"
        height="90"
        href="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

CopyrightIcon.propTypes = {
  size: PropTypes.number,
};

export default CopyrightIcon;
