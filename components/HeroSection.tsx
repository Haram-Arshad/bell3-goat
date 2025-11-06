import React, { useState, useEffect } from 'react';
import AnimateOnScroll from './ui/AnimateOnScroll';

const HeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative bg-white pt-28 lg:pt-36 pb-16 overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-48 h-48 bg-brand-yellow/20 rounded-full blur-3xl -translate-x-1/4"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      />
      <div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl translate-x-1/4"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
      />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fadeInUp" className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tight leading-tight">
                    <span className="block">Fuel the Creativity:</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-orange-500">Donate to Your Favorite Content Creators</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-500">
                    Experience the Power of Social Crowdfunding: Connect, Share, Get Inspired and Support Like-Minded people on Our Website
                </p>
            </AnimateOnScroll>

            <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <AnimateOnScroll animation="zoomIn" delay={200} className="bg-brand-yellow p-8 sm:p-12 rounded-2xl text-center flex flex-col items-center justify-center h-full shadow-lg">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">Start Posting</h2>
                    <a href="#" className="mt-8 inline-block bg-brand-orange text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 duration-300 hover:shadow-brand-orange/40 hover:shadow-[0_0_25px_0px_var(--tw-shadow-color)]">
                        POST NOW
                    </a>
                </AnimateOnScroll>
                <AnimateOnScroll animation="zoomIn" delay={400} className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                     <img src="https://picsum.photos/800/600?random=2" alt="Person typing on a laptop" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </AnimateOnScroll>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;