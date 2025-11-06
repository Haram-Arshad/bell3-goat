import React from 'react';
import AppStoreButtons from './ui/AppStoreButtons';
import AnimateOnScroll from './ui/AnimateOnScroll';

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-20 sm:py-28 bg-brand-orange text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimateOnScroll animation="slideInLeft" className="relative">
            <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://picsum.photos/500/500?random=4" alt="Creator working on a laptop in a cozy room" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
            </div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full opacity-50 blur-2xl -z-10"></div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slideInRight">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Building a Community of Creativity
            </h2>
            <p className="mt-6 text-lg text-orange-100 leading-relaxed">
              We believe that everyone has a story to tell, and we want to give talented content creators a platform to share their unique perspectives and experiences with the world. 
            </p>
            <p className="mt-4 text-lg text-orange-100 leading-relaxed">
              We believe in the power of storytelling to inspire change, spark conversation, and bring people together. By donating to our content creators, you're not only supporting their work, but also helping to promote a culture of creativity and innovation.
            </p>
            <AppStoreButtons />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;