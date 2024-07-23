const KeySVG = ({ isActive }) => {
    const color = isActive ? "#ffffff" : "#9197B3";
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip501_126">
                    <rect id="icon / 24 / outline / key-square" rx="0" width="23" height="23" transform="translate(0.5 0.5)" fill="currentColor" fillOpacity="0"/>
                </clipPath>
            </defs>
            <rect id="icon / 24 / outline / key-square" rx="0" width="23" height="23" transform="translate(0.5 0.5)" fill="currentColor" fillOpacity="0"/>
            <g clipPath="url(#clip501_126)">
                <path id="Vector" d="M15 22C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
                <path id="Vector" d="M12.1 14.64L9.51 17.21C9.33 17.41 8.96 17.53 8.68 17.49L7.48 17.33C7.09 17.28 6.73 16.9 6.67 16.51L6.51 15.31C6.47 15.05 6.6 14.68 6.78 14.49L9.35 11.91C8.92 10.48 9.26 8.86 10.39 7.73C12.01 6.11 14.65 6.11 16.28 7.73C17.9 9.34 17.9 11.98 16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
                <path id="Vector" d="M10.45 16.28L9.59 15.42" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
                <path id="Vector" d="M13.39 10.7L13.4 10.7" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
            </g>
        </svg>
    );
}

export default KeySVG;
