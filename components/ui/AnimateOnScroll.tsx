import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeIn' | 'zoomIn' | 'slideInLeft' | 'slideInRight';
  delay?: number; // Delay in ms
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, triggerOnce]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out duration-1000`;
    const startClasses = {
      fadeInUp: 'opacity-0 translate-y-8',
      fadeIn: 'opacity-0',
      zoomIn: 'opacity-0 scale-90',
      slideInLeft: 'opacity-0 -translate-x-12',
      slideInRight: 'opacity-0 translate-x-12',
    };
    const endClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';
    
    return `${baseClasses} ${isVisible ? endClasses : startClasses[animation]}`;
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClasses()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;