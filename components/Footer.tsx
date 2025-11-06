import React from 'react';
import AppStoreButtons from './ui/AppStoreButtons';
import Logo from './ui/Logo';
import AnimateOnScroll from './ui/AnimateOnScroll';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode, label: string }> = ({ href, children, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-orange-200 hover:text-white transition-colors">
    {children}
  </a>
);

const LoveSticker = () => (
    <div className="absolute top-1/2 -right-4 md:right-16 transform -translate-y-1/2 rotate-12 hidden lg:block transition-transform duration-500 hover:scale-110 hover:rotate-6">
        <div className="relative w-36 h-36">
            <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
                <path id="circlePath" fill="none" d=" M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0 "/>
                <text fill="#FFC700" style={{fontSize: '24px', letterSpacing: '2px'}}>
                    <textPath href="#circlePath" startOffset="0%">
                        • I LOVE • I LOVE • I LOVE
                    </textPath>
                </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-secondary text-white overflow-hidden">
        <div className="bg-black py-20 text-center relative">
            <AnimateOnScroll animation="fadeIn" className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Support Your Favorite Creators
                </h2>
                <p className="mt-2 text-3xl md:text-4xl font-bold text-brand-yellow">DONATE NOW!</p>
                <AppStoreButtons />
                <LoveSticker />
            </AnimateOnScroll>
        </div>
      <div className="bg-brand-orange">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
            <AnimateOnScroll animation="fadeInUp" delay={0} className="md:col-span-4 flex flex-col items-center md:items-start">
                <a href="#home" aria-label="Bell3 Home">
                    <Logo variant="light" />
                </a>
                <p className="mt-4 text-orange-100 max-w-xs">
                Connect, Share, Get Inspired and Support Like-Minded people on Bell3.
                </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={100} className="md:col-span-2">
                <h3 className="font-bold text-lg text-white">Sitemap</h3>
                <ul className="mt-4 space-y-2">
                <li><a href="#home" className="text-orange-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#vision" className="text-orange-200 hover:text-white transition-colors">News Feed</a></li>
                <li><a href="#community" className="text-orange-200 hover:text-white transition-colors">About us</a></li>
                <li><a href="#contact" className="text-orange-200 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Terms of use and privacy policy</a></li>
                <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Post Contents!</a></li>
                </ul>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" delay={200} className="md:col-span-3">
                <h3 className="font-bold text-lg text-white">Contact</h3>
                <address className="mt-4 not-italic text-orange-200 space-y-2">
                <p>60 PAYA LEBAR ROAD</p>
                <p>#11-03 PAYA LEBAR SQUARE</p>
                <p>Singapore 409051</p>
                <a href="mailto:info@bell3.net" className="hover:text-white block transition-colors">info@bell3.net</a>
                </address>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" delay={300} className="md:col-span-3 flex flex-col items-center md:items-start">
                 <div className="flex space-x-5">
                    <SocialIcon href="#" label="Instagram"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C8.74 2 8.45 2.01 7.37 2.06c-1.09.05-1.84.22-2.48.47a4.9 4.9 0 00-1.77 1.15 4.9 4.9 0 00-1.15 1.77c-.25.64-.42 1.39-.47 2.48C2.01 8.45 2 8.74 2 12s.01 3.55.06 4.63c.05 1.09.22 1.84.47 2.48a4.9 4.9 0 001.15 1.77 4.9 4.9 0 001.77 1.15c.64.25 1.39.42 2.48.47C8.45 21.99 8.74 22 12 22s3.55-.01 4.63-.06c1.09-.05 1.84-.22 2.48-.47a4.9 4.9 0 001.77-1.15 4.9 4.9 0 001.15-1.77c.25-.64.42-1.39.47-2.48.05-1.08.06-1.37.06-4.63s-.01-3.55-.06-4.63c-.05-1.09-.22-1.84-.47-2.48a4.9 4.9 0 00-1.15-1.77 4.9 4.9 0 00-1.77-1.15c-.64-.25-1.39-.42-2.48-.47C15.55 2.01 15.26 2 12 2zm0 1.8c3.2 0 3.48.01 4.7.07 1.02.05 1.63.22 2.02.38.48.18.88.42 1.28.83.4.4.65.8.83 1.28.16.39.33.99.38 2.02.06 1.22.07 1.5.07 4.7s-.01 3.48-.07 4.7c-.05 1.02-.22 1.63-.38 2.02-.18.48-.42.88-.83 1.28-.4.4-.8.65-1.28.83-.39.16-.99.33-2.02.38-1.22.06-1.5.07-4.7.07s-3.48-.01-4.7-.07c-1.02-.05-1.63-.22-2.02-.38-.48-.18-.88-.42-1.28-.83-.4-.4-.65-.8-.83-1.28-.16-.39-.33-.99-.38-2.02C3.81 15.48 3.8 15.2 3.8 12s.01-3.48.07-4.7c.05-1.02.22-1.63.38-2.02.18-.48.42-.88.83-1.28.4-.4.8-.65 1.28-.83.39-.16.99-.33 2.02-.38C8.52 3.81 8.8 3.8 12 3.8zm0 3.3a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zM12 15a3 3 0 110-6 3 3 0 010 6zm4.8-7.8a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" /></svg></SocialIcon>
                    <SocialIcon href="#" label="Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></SocialIcon>
                    <SocialIcon href="#" label="Twitter"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.646 1.956 2.523 3.379 4.75 3.419-1.728 1.343-3.901 2.148-6.262 2.148-.408 0-.81-.024-1.21-.07A13.953 13.953 0 007.548 21c9.058 0 14.01-7.502 14.01-14.01 0-.213 0-.425-.015-.636a10.02 10.02 0 002.456-2.548z" /></svg></SocialIcon>
                    <SocialIcon href="#" label="LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M21.25 2H2.75A.75.75 0 002 2.75v18.5c0 .414.336.75.75.75h18.5a.75.75 0 00.75-.75V2.75a.75.75 0 00-.75-.75zM8.25 18.25h-2.5V9.75h2.5v8.5zM7 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.25 9.75h-2.5v-4.17c0-.996-.018-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.241h-2.5V9.75h2.4v1.1h.033a2.633 2.633 0 012.367-1.3c2.533 0 2.999 1.668 2.999 3.837v4.463z" clipRule="evenodd" /></svg></SocialIcon>
                    <SocialIcon href="#" label="YouTube"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.99 8.746 22 12 22 12s0 3.255-.418 4.814a2.506 2.506 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 011.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418zM9.5 15.5V8.5l6 3.5-6 3.5z" clipRule="evenodd" /></svg></SocialIcon>
                    <SocialIcon href="#" label="TikTok"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.04-5.36.01-4.03-.01-8.05.02-12.07z" /></svg></SocialIcon>
                </div>
            </AnimateOnScroll>

            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;