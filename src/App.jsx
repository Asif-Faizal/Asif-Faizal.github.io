import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { ChevronDown, Code, Smartphone, Zap, Star, Github, Linkedin, Mail, ExternalLink, ArrowRight, Play, Pause, Volume2, Globe, Library, Instagram, Send } from 'lucide-react';
import './App.css';
import versaceImage from './assets/versace.png';
import socialCircleImage from './assets/social-circle.png';
import informedImage from './assets/informed.png';
import iphone15Image from './assets/iphone15.png';
import profileImage from './assets/profile.png';
import {
  SiFlutter,
  SiAndroid,
  SiKotlin,
  SiApple,
  SiSwift,
  SiGo,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiNodedotjs,
  SiDart,
  SiJetpackcompose,
  SiFirebase,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const technologies = [
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Dart', icon: SiDart },
  { name: 'Android', icon: SiAndroid },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Jetpack Compose', icon: SiJetpackcompose },
  { name: 'iOS', icon: SiApple },
  { name: 'Swift', icon: SiSwift },
  // { name: 'KMP', icon: Library },
  { name: 'Golang', icon: SiGo },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'gRPC', icon: Code },
  { name: 'ISO8583', icon: Globe },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Firebase', icon: SiFirebase },
  // { name: 'Docker', icon: SiDocker },
  // { name: 'Kubernetes', icon: SiKubernetes },
];

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-accent/30 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 400 }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-background overflow-hidden">
                {/* Background Circle with Profile */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-200 rounded-full opacity-20 shadow-2xl overflow-hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            boxShadow: '0 0 100px rgba(255, 255, 255, 0.1), 0 0 200px rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* <motion.img
            src={profileImage}
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
          /> */}
        </motion.div>
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-lg font-medium text-gray-500 tracking-wider uppercase mb-2"
              >
                Hi, I'm
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold gradient-text leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Mohammed Asif
                </motion.span>
                <br />
                <motion.span
                  className="text-4xl lg:text-5xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  A Mobile App Developer
                </motion.span>
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <p className="text-xl lg:text-2xl text-gray-500 max-w-lg">
                Creating Scallable apps, performant mobile experiences with seamless user interfaces.
              </p>
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white to-gray-400 rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              />
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="https://github.com/Asif-Faizal" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-8 py-3 text-gray-900 border border-gray-900/20 rounded-full font-bold flex items-center gap-2"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </a>
              <a href="mailto:moh.asif@protonmail.ch">
                <motion.button
                  className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold flex items-center gap-2"
                  whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                  <Mail className="w-4 h-4" />
                </motion.button>
              </a>
            </motion.div>

            {/* Floating stats */}
            <motion.div 
              className="flex gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                >
                  <motion.div 
                    className="text-2xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + (index * 0.1), type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <IPhoneMockup />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            className="p-2 rounded-full border border-gray-200"
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <motion.div 
          className="container mx-auto"
          style={{ y: y1 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Can I Do?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-100/5 to-white/5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-5xl lg:text-7xl font-bold gradient-text leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Do I Know?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            These are some of the technologies I have worked with.
          </motion.p>
          
          <InteractiveDemo />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-background">
        <motion.div 
          className="container mx-auto flex flex-col items-center"
          style={{ y: y2 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-16 mt-24 gradient-text text-center mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What have I built?
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-16 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to bring your mobile app ideas to life? Drop me a message below or connect with me on social media.
          </motion.p>
          
          <WhatsAppForm />

          <motion.div 
            className="flex justify-center gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl group-hover:border-gray-200 transition-all duration-300">
                  <link.icon className="w-7 h-7 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="border-t border-gray-200 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 Mohammed Asif. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Made with <span className="text-red-500">❤️</span> and lots of animations
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// iPhone 15 Image Component
const IPhoneMockup = () => {
  const socialIcons = [
    { icon: Github, color: "#333", url: "https://github.com/Asif-Faizal" },
    { icon: Linkedin, color: "#0077B5", url: "https://www.linkedin.com/in/moh--asif" },
    { icon: Instagram, color: "#E4405F", url: "https://www.instagram.com/asif_faizal" },
    { icon: Mail, color: "#EA4335", url: "mailto:moh.asif@protonmail.ch" }
  ];

  return (
    <motion.div 
      className="relative cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.9999 }}
    >
      <img 
        src={iphone15Image} 
        alt="iPhone 15" 
        className="w-96 h-auto object-contain"
        style={{
          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25))'
        }}
      />
      
      {/* Social Media Icons Overlay */}
      <div className="absolute top-16 left-8">
        <div className="grid grid-cols-4 gap-3 p-6">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/10 border border-black/30"
              style={{ backgroundColor: `${social.color}15` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-8 h-8" style={{ color: social.color }} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Interactive Demo Component
const InteractiveDemo = () => {
  const [activeDemo] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="grid grid-cols-3 md:grid-cols-6 gap-4"
        key={activeDemo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200/50 rounded-2xl cursor-pointer"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
              <tech.icon className="w-8 h-8 text-gray-500 mb-2" />
              <span className="text-xs font-bold text-gray-700">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Simple Skill Card Component
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
        transition: { type: "spring", stiffness: 800, damping: 15 }
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
          <skill.icon className="w-8 h-8 text-gray-800" />
        </div>
        <h3 className="text-xl font-bold">{skill.name}</h3>
      </div>
      
      <p className="text-gray-500 mb-4">
        {skill.description}
      </p>
      
      <div className="space-y-2">
        {skill.technologies.map((tech) => (
          <div key={tech} className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{tech}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Simple Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
        transition: { type: "spring", stiffness: 800, damping: 15 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <h3 className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full">{project.title}</h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-800 mb-4 text-lg font-bold">
          {project.name}
        </p>
        <p className="text-gray-500 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-black/5"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-black/5"
            >
              <span>Source</span>
              <Code className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Data
const stats = [
  { value: "10+", label: "Projects" },
  { value: "1+", label: "Years Exp" },
  { value: "100%", label: "Satisfaction" }
];

const skills = [
  {
    name: "Mobile App Development",
    icon: Smartphone,
    description: "Building hughely scalable apps with beautiful UIs and smooth animations. I have worked on both Flutter and Native App Development.",
    technologies: ["Flutter","Native App Development", "Swift", "Kotlin"]
  },
  {
    name: "Backend Integration",
    icon: Code,
    description: "Connecting mobile apps with robust backend services and APIs. I have integrated directly to payment gateways, banking APIs, and other third party services.",
    technologies: ["REST APIs", "GraphQL", "Firebase", "gRPC","ISO8583"]
  },
  {
    name: "Backend Development",
    icon: Zap,
    description: "Creating robust backend services and APIs for mobile apps. I have worked on both REST, GraphQL and gRPC APIs",
    technologies: ["Go", "MySQL", "MongoDB","Node.js"]
  }
];

const projects = [
  {
    name: "Versace",
    title: "Full Stack E-Commerce App",
    description: "Full fledged Ecommerce Application with product and order managment with payment integration. The backend is built with Golang and handles microservices like payment, order, product, user, etc.",
    technologies: ["Flutter", "Push Notifications", "Go", "MySQL"],
    imageUrl: versaceImage,
    liveDemoUrl: "https://example.com/ecommerce-demo",
    sourceUrl: "https://github.com/Asif-Faizal/Versace"
  },
  {
    name: "Social Circle",
    title: "Messaging App",
    description: "Real-time chat application powered by gRPC, Node.js, and MongoDB on the backend, with a Flutter. It features user authentication, real-time messaging and chat history retrieval using Protocol Buffers.",
    technologies: ["Flutter", "Node.js", "gRPC", "MongoDB"],
    imageUrl: socialCircleImage,
    sourceUrl: "https://github.com/Asif-Faizal/Social-Circle"
  },
  {
    name: "Informed",
    title: "News App",
    description: "Informed is a News app built with Flutter's Test-Driven Development (TDD) and Clean Architecture with 49 tests. It focuses on modularity, testability, scalability and maintainability.",
    technologies: ["Flutter", "TDD", "Clean Architecture"],
    imageUrl: informedImage,
    sourceUrl: "https://github.com/Asif-Faizal/Informed"
  },
];

const socialLinks = [
  { name: "GitHub", icon: Github, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Email", icon: Mail, url: "#" }
];

const WhatsAppForm = () => {
  const [message, setMessage] = useState('');
  const phoneNumber = '+917559913631'; // Replace with your WhatsApp number

  const handleSend = () => {
    if (message.trim() !== '') {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <motion.div
      className="max-w-xl mx-auto mb-16 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className="w-full h-24 p-4 pr-20 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-gray-300 focus:outline-none resize-none transition-shadow duration-300 shadow-sm hover:shadow-md"
      />
      <motion.button
        onClick={handleSend}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1, backgroundColor: '#000' }}
        whileTap={{ scale: 0.95 }}
      >
        <Send className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}

export default App;

