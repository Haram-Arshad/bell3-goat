import React from 'react';
import AnimateOnScroll from './ui/AnimateOnScroll';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="zoomIn" className="max-w-3xl mx-auto text-center bg-gray-50 p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
            Get in touch and let's connect together!
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            If you have any questions or would like to get in touch with us, our team is available 24/7 to answer any questions or concerns. Contact us via our website, email, or phone and we will get back to you as soon as possible.
          </p>
          <div className="mt-8">
            <a 
              href="#"
              className="inline-block bg-brand-orange text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 duration-300 hover:shadow-brand-orange/40 hover:shadow-[0_0_25px_0px_var(--tw-shadow-color)]"
            >
              CONTACT US
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;