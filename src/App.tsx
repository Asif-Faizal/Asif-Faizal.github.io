import React, { useEffect, useState } from "react";
import Logo from "./assets/avatar.svg";

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let isAnimating = false;

    const handleScroll = (e) => {
      // Prevent default scroll during animation
      if (!animationComplete) {
        e.preventDefault();
        
        // If not already animating, start animation
        if (!isAnimating) {
          isAnimating = true;
          
          const animationDuration = 1000;
          const startTime = performance.now();
          
          const animate = () => {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            
            if (elapsed < animationDuration) {
              const progress = Math.min(elapsed / animationDuration * 300, 300);
              setScrollPosition(progress);
              requestAnimationFrame(animate);
            } else {
              setScrollPosition(300);
              setAnimationComplete(true);
              isAnimating = false;
              document.body.style.overflow = 'auto';
              
              // Small delay to ensure state updates are processed
              setTimeout(() => {
                // Remove event listeners
                window.removeEventListener('wheel', handleWheel);
                window.removeEventListener('touchmove', handleTouch);
                window.removeEventListener('scroll', handleScroll);
                
                // Force scroll to next section
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }, 50);
            }
          };
          
          requestAnimationFrame(animate);
        }
      } else {
        // Normal scrolling after animation
        setScrollPosition(window.scrollY + 300);
      }
    };

    // Handle both wheel and touch events
    const handleWheel = (e) => {
      if (!animationComplete) {
        e.preventDefault();
        handleScroll(e);
      }
    };

    const handleTouch = (e) => {
      if (!animationComplete) {
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

      {/* Add a spacer div to prevent content from showing too early */}
      <div style={{ height: scrollPosition < 300 ? "100vh" : "0" }}></div>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 px-10 bg-gray-200 text-center"
        style={{ 
          position: scrollPosition < 300 ? 'absolute' : 'relative',
          width: '100%',
          top: scrollPosition < 300 ? '100vh' : 'auto',
          pointerEvents: scrollPosition < 300 ? 'none' : 'auto'
        }}
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto">I love building amazing web experiences.</p>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-20 px-10 bg-white text-center"
        style={{ 
          position: scrollPosition < 300 ? 'absolute' : 'relative',
          width: '100%',
          top: scrollPosition < 300 ? 'calc(100vh + 240px)' : 'auto',
          pointerEvents: scrollPosition < 300 ? 'none' : 'auto'
        }}
      >
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p>Description of your project.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p>Description of your project.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 px-10 bg-gray-200 text-center"
        style={{ 
          position: scrollPosition < 300 ? 'absolute' : 'relative',
          width: '100%',
          top: scrollPosition < 300 ? 'calc(100vh + 600px)' : 'auto',
          pointerEvents: scrollPosition < 300 ? 'none' : 'auto'
        }}
      >
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p>Email: your.email@example.com</p>
      </section>

      {/* Footer */}
      <footer 
        className="py-4 bg-gray-800 text-white text-center"
        style={{ 
          position: scrollPosition < 300 ? 'absolute' : 'relative',
          width: '100%',
          top: scrollPosition < 300 ? 'calc(100vh + 800px)' : 'auto',
          pointerEvents: scrollPosition < 300 ? 'none' : 'auto'
        }}
      >
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
