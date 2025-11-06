import React, { useState, useEffect } from 'react';
import AnimateOnScroll from './ui/AnimateOnScroll';

const VisionSection: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <section id="vision" className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimateOnScroll animation="slideInLeft">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
              Our Vision
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We are a community-driven platform dedicated to supporting talented content creators from all walks of life. Our mission is to provide a space for writers, bloggers, and readers to connect, inspire, and empower each other in pursuing their creative passions.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Whether you're a seasoned writer or a budding blogger, our platform offers a wealth of resources and opportunities to help you grow.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slideInRight" className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
               <img src="https://picsum.photos/600/450?random=3" alt="Person browsing content on a tablet" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
            </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-orange/10 rounded-full blur-2xl -z-10" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}></div>
             <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl -z-10" style={{ transform: `translateY(${offsetY * 0.05}px)` }}></div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;