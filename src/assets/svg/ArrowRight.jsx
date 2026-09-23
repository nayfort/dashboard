import PropTypes from 'prop-types';

const ArrowRightSVG = ({ isActive }) => {
    const color = isActive ? "#ffffff" : "#9197B3";
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip501_174">
                    <rect rx="0" width="15" height="15" transform="translate(0.5 0.5)" fill="currentColor" fillOpacity="0"/>
                </clipPath>
            </defs>
            <rect rx="0" width="15" height="15" transform="translate(0.5 0.5)" fill="currentColor" fillOpacity="0"/>
            <g clipPath="url(#clip501_174)">
                <path d="M6 12L10 8L6 4" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
            </g>
        </svg>
    );
};

ArrowRightSVG.propTypes = { isActive: PropTypes.bool };

export default ArrowRightSVG;
