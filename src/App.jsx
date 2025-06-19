import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { ChevronDown, Code, Smartphone, Zap, Star, Github, Linkedin, Mail, ExternalLink, ArrowRight, Play, Pause, Volume2, Globe, Library } from 'lucide-react';
import './App.css';
import versaceImage from './assets/versace.png';
import socialCircleImage from './assets/social-circle.png';
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
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            style={{ opacity }}
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
          style={{ opacity }}
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
            Featured Projects
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to bring your mobile app ideas to life? Let's create something amazing together.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 group relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <link.icon className="w-6 h-6 relative z-10 text-gray-700" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">© 2024 Flutter Developer Portfolio. Made with ❤️ and lots of animations.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// iPhone Mockup Component (minimal, static)
const IPhoneMockup = () => {
  return (
    <div className="relative w-80 h-[600px] bg-black rounded-[50px] p-2 shadow-2xl flex flex-col items-center justify-start border-4 border-gray-800">
      {/* Notch */}
      <div className="phone-notch z-10 mt-2"></div>
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-8 pb-4 text-white text-sm font-medium w-full">
        <span>09:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 border border-white/50 rounded-sm flex items-center">
            <div className="w-3 h-1 bg-green-500 rounded-sm m-0.5" />
          </div>
        </div>
      </div>
      {/* App icons grid */}
      <div className="relative z-10 px-6 pt-8 w-full">
        <div className="grid grid-cols-4 gap-4">
          <div className="app-icon" style={{ backgroundColor: '#f3f4f6' }}>
            <Mail className="w-6 h-6 text-gray-700" />
          </div>
          <div className="app-icon" style={{ backgroundColor: '#e5e7eb' }}>
            <Smartphone className="w-6 h-6 text-gray-700" />
          </div>
          <div className="app-icon" style={{ backgroundColor: '#d1d5db' }}>
            <ExternalLink className="w-6 h-6 text-gray-700" />
          </div>
          <div className="app-icon" style={{ backgroundColor: '#9ca3af' }}>
            <Zap className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
      {/* Dock */}
      <div className="absolute bottom-8 left-6 right-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex justify-center gap-4">
          <div className="app-icon" style={{ backgroundColor: '#f3f4f6' }}>
            <Smartphone className="w-6 h-6 text-gray-700" />
          </div>
          <div className="app-icon" style={{ backgroundColor: '#e5e7eb' }}>
            <Mail className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </div>
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
              y: -10,
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

// Enhanced Skill Card Component
const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-white rounded-2xl hover-lift group cursor-pointer relative overflow-hidden border border-gray-100"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-50/5 to-gray-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <motion.div 
          className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <skill.icon className="w-8 h-8 text-gray-800" />
        </motion.div>
        <motion.h3 
          className="text-xl font-bold"
          whileHover={{ x: 5 }}
        >
          {skill.name}
        </motion.h3>
      </div>
      
      <motion.p 
        className="text-gray-500 mb-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (index * 0.1) + 0.3 }}
      >
        {skill.description}
      </motion.p>
      
      <div className="space-y-2 relative z-10">
        {skill.technologies.map((tech, techIndex) => (
          <motion.div
            key={tech}
            className="flex items-center gap-2 group/tech"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.1) + (techIndex * 0.05) + 0.5 }}
            whileHover={{ x: 5 }}
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-4 h-4 text-gray-400" />
            </motion.div>
            <span className="text-sm group-hover/tech:text-gray-800 transition-colors duration-200">{tech}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const liveDemoIconControls = useAnimation();
  const sourceIconControls = useAnimation();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white hover-lift cursor-pointer border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <h3 className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full">{project.title}</h3>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      
      <div className="p-6 relative">
        <motion.p 
          className="text-gray-800 mb-4 text-lg font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.name}
        </motion.p>
        <motion.p 
          className="text-gray-500 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index * 0.2) + (techIndex * 0.1) + 0.4 }}
              viewport={{ once: true }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        <div className="flex gap-4 mt-auto">
          {project.liveDemoUrl && (
            <motion.a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-black/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => liveDemoIconControls.start({ rotate: 45 })}
              onHoverEnd={() => liveDemoIconControls.start({ rotate: 0 })}
            >
              <span>Live Demo</span>
              <motion.div animate={liveDemoIconControls} transition={{ duration: 0.3 }}>
                <ExternalLink className="h-4 w-4" />
              </motion.div>
            </motion.a>
          )}
          {project.sourceUrl && (
            <motion.a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-black/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => sourceIconControls.start({ rotate: 45 })}
              onHoverEnd={() => sourceIconControls.start({ rotate: 0 })}
            >
              <span>Source</span>
              <motion.div animate={sourceIconControls} transition={{ duration: 0.3 }}>
                <Code className="h-4 w-4" />
              </motion.div>
            </motion.a>
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
    title: "Chat App",
    description: "A real-time chat application with features like private messaging, group chats, and read receipts.",
    technologies: ["Flutter", "Firebase", "WebSocket"],
    imageUrl: socialCircleImage,
    sourceUrl: "https://github.com/Asif-Faizal/Social-Circle"
  },
];

const socialLinks = [
  { name: "GitHub", icon: Github, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Email", icon: Mail, url: "#" }
];

export default App;

