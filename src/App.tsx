import React from "react";
import Logo from "./assets/avatar.svg";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen relative flex items-center justify-center bg-blue-500 text-white text-center">
        {/* SVG Image (Imported as React Component) */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img src={Logo} alt="" />
          
        </div>
        {/* Text Behind SVG */}
        <div className="z-0">
          <h1 className="text-5xl font-bold">Hello, I'm [Your Name]</h1>
          <p className="text-lg mt-4">A passionate developer.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto">I love building amazing web experiences.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-10 bg-white text-center">
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
      <section id="contact" className="py-20 px-10 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p>Email: your.email@example.com</p>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
