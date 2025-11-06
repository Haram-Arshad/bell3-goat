import React from 'react';

const AppStoreIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" fill="currentColor" className="w-8 h-8 mr-3" viewBox="0 0 384 512">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.1 0 183.2 0 249.4c0 71.6 47.5 113.3 88.8 113.3 23.4 0 45.7-16.4 64.4-16.4 18.8 0 44.6 19.7 73.2 19.7 41.2 0 70.1-23.4 85.5-23.4 26.9 0 49.4-16.4 49.4-16.4s-1.4-19.7-1.4-19.7c-3.1 1.4-6.2 2.8-9.4 4.2-18.8 9.4-31.2 16.4-44.6 16.4-13.3 0-29.3-9.4-44.6-26.9-19.7-22.3-33.8-51.7-33.8-80.3zM256 109.3c-13.3-16.4-28.2-31.2-43.2-39.2-13.3 7-26.9 16.4-38.1 29.3-12.2 15-22.3 34.9-22.3 56.8 0 21.8 9.4 41.7 22.3 56.8 13.3 16.4 28.2 31.2 43.2 39.2 13.3-8.1 26.9-16.4 38.1-29.3 12.2-15 22.3-34.9 22.3-56.8 0-21.8-9.4-41.7-22.3-56.8z"/>
    </svg>
);

const GooglePlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mr-3" viewBox="0 0 512 512">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L11 27.3v457.4L47 512l290.9-175.2-60.1-60.1L47 0zM155.4 287.3L47 423.1l280.8-161.2-172.4-74.6zM496 256c0-48.1-38.6-86.5-86.3-86.5-1.7 0-3.4 0-5.2 0l-60.1 60.1 60.1 60.1c3.2 0 6.3 0 9.3 0C457.4 342.5 496 304.1 496 256z"/>
    </svg>
);


const AppStoreButtons: React.FC = () => {
    const buttonClass = "flex items-center bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105";
    
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#" className={buttonClass}>
                <AppStoreIcon />
                <div className="text-left">
                    <p className="text-xs leading-tight">Download on the</p>
                    <p className="text-xl font-bold leading-tight">App Store</p>
                </div>
            </a>
            <a href="#" className={buttonClass}>
                <GooglePlayIcon/>
                <div className="text-left">
                    <p className="text-xs leading-tight">GET IT ON</p>
                    <p className="text-xl font-bold leading-tight">Google Play</p>
                </div>
            </a>
        </div>
    );
}

export default AppStoreButtons;