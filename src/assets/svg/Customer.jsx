const CustomerSVG = ({ isActive }) => {
    const color = isActive ? "#ffffff" : "#9197B3";
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip501_142">
                    <rect id="user-square 1" rx="0" width="23" height="23" transform="translate(0.5 0.5)" fill="white" fillOpacity="0"/>
                </clipPath>
            </defs>
            <rect id="user-square 1" rx="0" width="23" height="23" transform="translate(0.5 0.5)" fill="white" fillOpacity="0"/>
            <g clipPath="url(#clip501_142)">
                <path id="Vector" d="M15 22.74L9 22.74C7.68 22.74 6.58 22.61 5.65 22.33C5.31 22.23 5.09 21.9 5.11 21.55C5.36 18.56 8.39 16.21 12 16.21C15.61 16.21 18.63 18.55 18.89 21.55C18.92 21.91 18.7 22.23 18.35 22.33C17.42 22.61 16.32 22.74 15 22.74ZM6.72 21.05C7.38 21.18 8.13 21.24 9 21.24L15 21.24C15.87 21.24 16.62 21.18 17.28 21.05C16.75 19.13 14.56 17.71 12 17.71C9.44 17.71 7.25 19.13 6.72 21.05Z" stroke={color} strokeOpacity="1" strokeWidth="1.5" strokeLinejoin="round"/>
                <path id="Vector" d="M9 2C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.85 21.62C6.08 19.02 8.75 16.96 12 16.96C15.25 16.96 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2H9ZM8.41 10.58C8.41 8.6 10.02 7 12 7C13.98 7 15.58 8.6 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.41 12.56 8.41 10.58Z" stroke={color} strokeOpacity="1" strokeWidth="1.5" strokeLinejoin="round"/>
                <path id="Vector" d="M11.99 14.92C9.6 14.92 7.66 12.97 7.66 10.58C7.66 8.19 9.6 6.25 11.99 6.25C14.38 6.25 16.32 8.19 16.32 10.58C16.32 12.97 14.38 14.92 11.99 14.92ZM11.99 7.75C10.43 7.75 9.16 9.02 9.16 10.58C9.16 12.15 10.43 13.42 11.99 13.42C13.55 13.42 14.82 12.15 14.82 10.58C14.82 9.02 13.55 7.75 11.99 7.75Z" fill={color} fillOpacity="1" fillRule="nonzero"/>
            </g>
        </svg>
    );
}

export default CustomerSVG;
