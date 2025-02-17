const ProductSquareSVG = ({ isActive }) => {
    const color = isActive ? "#ffffff" : "#9197B3";
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip501_133">
                    <rect id="3d-square 1" rx="0" width="23" height="23" transform="translate(0.5 0.5)" fill="currentColor" fillOpacity="0"/>
                </clipPath>
            </defs>
            <rect id="3d-square 1" rx="0" width="23" height="23" transform="translate(0.5 0.5)" fill="currentColor" fillOpacity="0"/>
            <g clipPath="url(#clip501_133)">
                <path id="Vector" d="M15 22.75L9 22.75C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} fillOpacity="1" fillRule="nonzero"/>
                <path id="Vector" d="M12 13.07C11.87 13.07 11.74 13.04 11.62 12.97L6.32 9.91C5.96 9.7 5.84 9.24 6.05 8.89C6.26 8.53 6.72 8.41 7.07 8.62L11.99 11.47L16.88 8.64C17.24 8.43 17.7 8.56 17.9 8.91C18.1 9.26 17.98 9.73 17.63 9.93L12.37 12.97C12.26 13.03 12.13 13.07 12 13.07Z" fill={color} fillOpacity="1" fillRule="nonzero"/>
                <path id="Vector" d="M12 18.52C11.59 18.52 11.25 18.18 11.25 17.77V12.33C11.25 11.92 11.59 11.58 12 11.58C12.41 11.58 12.75 11.92 12.75 12.33V17.77C12.75 18.18 12.41 18.52 12 18.52Z" fill={color} fillOpacity="1" fillRule="nonzero"/>
                <path id="Vector" d="M12 18.74C11.42 18.74 10.85 18.61 10.39 18.36L7.19 16.58C6.23 16.05 5.49 14.78 5.49 13.68V10.29C5.49 9.2 6.24 7.93 7.19 7.39L10.39 5.61C11.31 5.1 12.69 5.1 13.61 5.61L16.81 7.39C17.77 7.92 18.51 9.19 18.51 10.29V13.68C18.51 14.77 17.76 16.04 16.81 16.58L13.61 18.36C13.15 18.62 12.58 18.74 12 18.74ZM12 6.74C11.67 6.74 11.35 6.8 11.12 6.93L7.92 8.71C7.43 8.98 6.99 9.74 6.99 10.29V13.68C6.99 14.24 7.43 14.99 7.92 15.26L11.12 17.04C11.58 17.3 12.42 17.3 12.88 17.04L16.08 15.26C16.57 14.99 17.01 14.23 17.01 13.68V10.29C17.01 9.73 16.57 8.98 16.08 8.71L12.88 6.93C12.65 6.8 12.33 6.74 12 6.74Z" fill={color} fillOpacity="1" fillRule="nonzero"/>
            </g>
        </svg>
    );
}

export default ProductSquareSVG;
