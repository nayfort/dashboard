const WalletSVG = ({ isActive }) => {
    const color = isActive ? "#ffffff" : "#9197B3";
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip501_150">
                    <rect id="wallet-money 2" rx="0" width="23" height="23" transform="translate(0.5 0.5)" fill="currentColor" fillOpacity="0"/>
                </clipPath>
            </defs>
            <rect id="wallet-money 2" rx="0" width="23" height="23" transform="translate(0.5 0.5)" fill="currentColor" fillOpacity="0"/>
            <g clipPath="url(#clip501_150)">
                <path id="Vector" d="M10.75 18.89C10.75 20.61 9.15 22 7.18 22C5.21 22 3.6 20.61 3.6 18.89V16.86C3.6 18.58 5.2 19.8 7.18 19.8C9.15 19.8 10.75 18.57 10.75 16.86V18.89Z" stroke={color} strokeOpacity="1" strokeWidth="1.5" strokeLinejoin="round"/>
                <path id="Vector" d="M10.37 15.47C9.78 16.44 8.57 17.04 7.17 17.04C5.77 17.04 4.56 16.43 3.97 15.47C3.73 15.07 3.59 14.61 3.59 14.11C3.59 13.25 3.99 12.48 4.63 11.92C5.28 11.35 6.17 11.01 7.16 11.01C8.15 11.01 9.04 11.36 9.69 11.92C10.35 12.47 10.75 13.25 10.75 14.11C10.75 14.61 10.61 15.07 10.37 15.47Z" stroke={color} strokeOpacity="1" strokeWidth="1.5" strokeLinejoin="round"/>
                <path id="Vector" d="M10.75 16.86C10.75 18.58 9.15 19.79 7.18 19.79C5.21 19.79 3.6 18.57 3.6 16.86V14.11C3.6 12.39 5.2 11 7.18 11C8.17 11 9.06 11.35 9.71 11.91C10.35 12.47 10.75 13.25 10.75 14.11V16.86Z" stroke={color} strokeOpacity="1" strokeWidth="1.5" strokeLinejoin="round"/>
                <path id="Vector" d="M22 13.03C22 13.58 21.56 14.02 21 14.04H19.03C17.95 14.04 16.96 13.25 16.87 12.17C16.81 11.54 17.05 10.95 17.47 10.54C17.84 10.16 18.36 9.94 18.92 9.94H21C21.56 9.96 22 10.41 22 10.96V13.03Z" stroke={color} strokeOpacity="1" strokeWidth="1.5" strokeLinejoin="round"/>
                <path id="Vector" d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.51 6.71 3.5 7 3.5H16C16.26 3.5 16.51 3.5 16.75 3.54C19.33 3.84 21 5.76 21 8.5V9.95H18.92C18.36 9.95 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.87 12.18C16.96 13.26 17.95 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5" stroke={color} strokeOpacity="1" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
            </g>
        </svg>
    );
}

export default WalletSVG;
