import { useState, useEffect } from 'react';

export function useScrollSpeed(): number {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());

  useEffect(() => {
    let frameId: number;
    let timeoutId: NodeJS.Timeout;

    function handleScroll() {
      const currentTime = Date.now();
      const currentScrollTop = window.scrollY;
      const timeDiff = currentTime - lastScrollTime;
      
      if (timeDiff > 0) {
        const scrollDiff = Math.abs(currentScrollTop - lastScrollTop);
        const instantSpeed = Math.min(scrollDiff / timeDiff * 10, 20);
        
        setScrollSpeed(instantSpeed);
        setLastScrollTop(currentScrollTop);
        setLastScrollTime(currentTime);

        // Clear existing timeout
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        // Set new timeout to gradually decrease speed
        timeoutId = setTimeout(() => {
          frameId = requestAnimationFrame(function decrease() {
            setScrollSpeed((prevSpeed) => {
              const newSpeed = prevSpeed * 0.95;
              if (newSpeed < 0.1) {
                return 0;
              }
              frameId = requestAnimationFrame(decrease);
              return newSpeed;
            });
          });
        }, 50);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollTop, lastScrollTime]);

  return scrollSpeed;
}