import React, { useEffect, useState } from "react";
import Logo from "./assets/avatar.svg";

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  useEffect(() => {
    let isAnimating = false;
    let lastScrollY = window.scrollY;

    // Add easing functions
    const easeOutBack = (x: number): number => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    };

    const easeInOutBack = (x: number): number => {
      const c1 = 1.70158;
      const c2 = c1 * 1.525;
      return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    };

    const handleScroll = (e) => {
      const currentScrollY = window.scrollY;
      const scrollingUp = e.deltaY ? e.deltaY < 0 : currentScrollY < lastScrollY;
      lastScrollY = currentScrollY;

      // Handle scroll up when animation is complete
      if (animationComplete && scrollingUp && currentScrollY <= window.innerHeight) {
        e.preventDefault();
        setAnimationComplete(false);
        setShowBottomSheet(false);  // Hide bottom sheet when reversing animation
        document.body.style.overflow = 'hidden';
        
        if (!isAnimating) {
          isAnimating = true;
          
          const animationDuration = 1200; // Increased duration
          const startTime = performance.now();
          const startPosition = 300;
          const targetPosition = 0;
          
          const animate = () => {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            
            if (elapsed < animationDuration) {
              const progress = elapsed / animationDuration;
              const easeProgress = easeOutBack(progress);
              const newPosition = startPosition + (targetPosition - startPosition) * easeProgress;
              setScrollPosition(newPosition);
              window.scrollTo(0, 0);
              requestAnimationFrame(animate);
            } else {
              setScrollPosition(0);
              window.scrollTo(0, 0);
              isAnimating = false;
              window.addEventListener('wheel', handleWheel, { passive: false });
              window.addEventListener('touchmove', handleTouch, { passive: false });
              window.addEventListener('scroll', handleScroll, { passive: false });
            }
          };
          
          requestAnimationFrame(animate);
        }
      }

      // Original animation logic for scrolling down
      if (!animationComplete || (scrollingUp && scrollPosition <= 300)) {
        e.preventDefault();
        
        if (!isAnimating) {
          isAnimating = true;
          
          const animationDuration = 1200;
          const startTime = performance.now();
          const startPosition = scrollPosition;
          const targetPosition = scrollingUp ? 0 : 300;
          
          const animate = () => {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            
            if (elapsed < animationDuration) {
              const progress = elapsed / animationDuration;
              const easeProgress = scrollingUp ? easeOutBack(progress) : easeInOutBack(progress);
              const newPosition = startPosition + (targetPosition - startPosition) * easeProgress;
              setScrollPosition(newPosition);
              requestAnimationFrame(animate);
            } else {
              setScrollPosition(targetPosition);
              if (!scrollingUp) {
                setAnimationComplete(true);
                document.body.style.overflow = 'auto';
                
                setTimeout(() => {
                  window.removeEventListener('wheel', handleWheel);
                  window.removeEventListener('touchmove', handleTouch);
                  window.removeEventListener('scroll', handleScroll);
                  
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                  });
                  // Show bottom sheet after scrolling to next section
                  setShowBottomSheet(true);
                }, 50);
              }
              isAnimating = false;
            }
          };
          
          requestAnimationFrame(animate);
        }
      } else {
        setScrollPosition(window.scrollY + 300);
        // Show bottom sheet when scrolling down after animation
        if (!showBottomSheet && window.scrollY > window.innerHeight) {
          setShowBottomSheet(true);
        }
      }
    };

    const handleWheel = (e) => {
      if (!animationComplete || (window.scrollY <= window.innerHeight)) {
        e.preventDefault();
        handleScroll(e);
      }
    };

    const handleTouch = (e) => {
      if (!animationComplete || (window.scrollY <= window.innerHeight)) {
        e.preventDefault();
        handleScroll(e);
      }
    };

    // Initial setup
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    // Add event listeners with passive: false
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouch, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationComplete]);

  return (
    <div className="font-sans bg-gray-100 text-gray-900">
     
      {/* Hero Section */}
      <section 
        id="hero" 
        className="h-[100vh] pt-16 relative flex items-center justify-center bg-blue-500 text-white text-center overflow-hidden" 
        style={{ 
          perspective: "1000px",
          minHeight: scrollPosition < 300 ? "100vh" : "auto"
        }}
      >
        {/* Modified scroll icon visibility */}
        <div 
          className="fixed bottom-8 right-8 z-30 animate-bounce flex flex-col items-center justify-center text-center opacity-20 hover:opacity-100 transition-opacity duration-300"
          style={{ 
            opacity: Math.max(0.2, 1 - scrollPosition / 100),
            display: 'flex'  // Remove conditional display
          }}
        >
          <span className="text-sm mb-2 whitespace-nowrap">Scroll</span>
          <svg 
            className="w-6 h-6 text-white"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        <div 
          className="container mx-auto px-4 flex flex-col items-center h-full" 
          style={{ 
            transformStyle: "preserve-3d",
            position: scrollPosition < 300 ? "fixed" : "relative",
            top: scrollPosition < 300 ? "0" : "",
            width: "100%"
          }}
        >
          <div 
            className="z-0 absolute inset-0 flex items-end pb-20 justify-center h-full"
            style={{ 
              transform: `translateZ(${scrollPosition * 0.1}px)`,
              opacity: Math.min(scrollPosition / 300, 1),
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            <div>
              <h1 className="text-[12rem] font-bold text-white">I'm ASIF</h1>
              <p className="text-2xl mt-4 text-white">A Mobile App Developer</p>
            </div>
          </div>
          <div 
            className="z-20 absolute inset-0 flex items-end justify-center h-full pt-16"
            style={{ 
              opacity: Math.max(0.15, 1 - scrollPosition / 300),
              transition: 'opacity 0.1s ease-out'
            }}
          >
            <img src={Logo} alt="" className="h-[100vh] w-auto object-cover pt-20" />
          </div>
        </div>
      </section>

      {/* Bottom Sheet */}
      <div 
        className={`fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl transition-transform duration-500 ease-in-out z-50`}
        style={{ 
          height: '80vh',
          transform: showBottomSheet ? 'translateY(0)' : 'translateY(100%)',
          display: animationComplete ? 'block' : 'none'
        }}
      >
        <div className="w-full p-4 flex justify-center">
          <div className="w-20 h-1.5 bg-gray-300 rounded-full"></div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Content Title</h2>
          <p>Your bottom sheet content goes here...</p>
        </div>
      </div>

      {/* Add a spacer div to prevent content from showing too early */}
      <div style={{ height: scrollPosition < 300 ? "100vh" : "0" }}></div>
    </div>
  );
};

export default App;
