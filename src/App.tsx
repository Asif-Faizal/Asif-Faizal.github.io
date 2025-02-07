import React, { useEffect, useState } from "react";
import Logo from "./assets/avatar.svg";

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500">Hello</h2>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="h-[100vh] pt-16 relative flex items-center justify-center bg-blue-500 text-white text-center overflow-hidden" 
        style={{ 
          perspective: "1000px",
          minHeight: scrollPosition < 300 ? "100vh" : "auto"  // Lock height until animation completes
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
              <h1 className="text-[12rem] font-bold text-white">Hi, I'm ASIF</h1>
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
