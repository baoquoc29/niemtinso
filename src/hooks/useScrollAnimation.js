import { useEffect, useRef, useState } from 'react';

// Custom hook để phát hiện khi element scroll vào viewport
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve sau khi đã visible để không trigger lại
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
};

// Component wrapper để dễ sử dụng animation
export const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'scroll-animate';
      case 'fade-left':
        return 'scroll-animate-left';
      case 'fade-right':
        return 'scroll-animate-right';
      case 'scale':
        return 'scroll-animate-scale';
      default:
        return 'scroll-animate';
    }
  };

  const getDelayClass = () => {
    if (delay === 0) return '';
    return `delay-${delay}`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${getDelayClass()} ${isVisible ? 'animate-visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default useScrollAnimation;
