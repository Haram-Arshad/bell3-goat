import React from 'react';
import AppStoreButtons from './ui/AppStoreButtons';
import AnimateOnScroll from './ui/AnimateOnScroll';

const Avatar: React.FC<{ src: string, alt: string, className?: string, delay: number }> = ({ src, alt, className, delay }) => (
    <AnimateOnScroll animation="zoomIn" delay={delay} className={`absolute w-24 h-24 rounded-full shadow-lg border-4 border-white ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-110" />
    </AnimateOnScroll>
);

const JoinSection: React.FC = () => {
  return (
    <section id="discover" className="overflow-hidden">
      <div className="py-20 sm:py-28 bg-brand-yellow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             <AnimateOnScroll animation="slideInLeft">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
                  Discover Daily Content from Talented Creators
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  At our Daily Content, talented members of the Bell3 community share their unique perspectives, creativity, and ideas. At Bell3, we believe that creativity is an essential part of our lives and our creators are passionate about their work, and they love nothing more than sharing their perspective with others.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  From writers to photographers to graphic designers and more, our community is diverse and inclusive, with members from all walks of life. We encourage our members to interact with each other, offering feedback, inspiration, and support along the way.
                </p>
             </AnimateOnScroll>
             <div className="relative flex justify-center items-center min-h-[320px] lg:min-h-0 lg:h-80">
                <Avatar src="https://picsum.photos/200?random=5" alt="Creator 1" delay={100} className="transform -translate-x-8 -translate-y-12 scale-110" />
                <Avatar src="https://picsum.photos/200?random=6" alt="Creator 2" delay={200} className="transform translate-x-12 -translate-y-4 scale-90" />
                <Avatar src="https://picsum.photos/200?random=7" alt="Creator 3" delay={300} className="transform -translate-x-12 translate-y-16" />
                <Avatar src="https://picsum.photos/200?random=8" alt="Creator 4" delay={400} className="transform translate-x-16 scale-125" />
                <Avatar src="https://picsum.photos/200?random=9" alt="Creator 5" delay={500} className="transform translate-x-4 -translate-y-24 scale-75" />
             </div>
          </div>
        </div>
      </div>
      <div className="py-20 sm:py-28 bg-brand-orange text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <AnimateOnScroll animation="slideInLeft" className="relative grid grid-cols-2 gap-4">
                    <div className="absolute w-40 h-40 bg-white/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <img src="https://picsum.photos/400/500?random=10" alt="Creator working" className="rounded-2xl shadow-lg w-full h-full object-cover aspect-[4/5] transform transition-transform duration-300 translate-y-8 hover:scale-105 hover:-translate-y-4" />
                    <img src="https://picsum.photos/400/500?random=11" alt="Smiling creator" className="rounded-2xl shadow-lg w-full h-full object-cover aspect-[4/5] transform transition-transform duration-300 -translate-y-8 hover:scale-105 hover:translate-y-4" />
                </AnimateOnScroll>
                <AnimateOnScroll animation="slideInRight" className="order-first lg:order-last">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Join our Community
                    </h2>
                    <p className="mt-4 text-lg text-orange-100 leading-relaxed">
                        Are you a blogger, writer, or content creator looking for a community of like-minded individuals to connect with and grow your audience? Then you've come to the right place!
                    </p>
                    <p className="mt-4 text-lg text-orange-100 leading-relaxed">
                        Our community is dedicated to empowering content creators to share their stories, reach new audiences and start accepting donations for their work.
                    </p>
                    <AppStoreButtons />
                </AnimateOnScroll>
            </div>
          </div>
      </div>
    </section>
  );
};

export default JoinSection;