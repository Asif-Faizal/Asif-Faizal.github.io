import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { ChevronDown, Code, Smartphone, Zap, Star, Github, Linkedin, Mail, ExternalLink, ArrowRight, Play, Pause, Volume2 } from 'lucide-react';
import './App.css';

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-sm font-medium text-gray-400 tracking-wider uppercase"
            >
              Welcome to my portfolio
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Flutter
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Developer
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <p className="text-xl lg:text-2xl text-gray-300 max-w-lg">
                Creating beautiful, performant mobile experiences with cutting-edge animations and seamless user interfaces.
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
              <motion.button 
                className="group px-8 py-3 bg-white text-black rounded-full font-semibold hover:shadow-lg hover:shadow-white/25 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
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
              <motion.button 
                className="px-8 py-3 border border-white/20 rounded-full font-semibold glass-effect hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative">Get In Touch</span>
              </motion.button>
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
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
            className="p-2 rounded-full border border-white/20 glass-effect"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
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
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 bg-secondary relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-800/5 to-gray-600/5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Interactive Experience
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every element on this page responds to your interactions. Hover, click, and explore!
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
          
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary relative">
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
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
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
                className="p-4 bg-white/10 rounded-full glass-effect hover:bg-white/20 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <link.icon className="w-6 h-6 relative z-10" />
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
    <div className="relative w-80 h-[600px] bg-black rounded-[50px] p-2 shadow-2xl flex flex-col items-center justify-start">
      {/* Notch */}
      <div className="phone-notch z-10 mt-2"></div>
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-8 pb-4 text-white text-sm font-medium w-full">
        <span>09:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 border border-white rounded-sm flex items-center">
            <div className="w-3 h-1 bg-green-500 rounded-sm m-0.5" />
          </div>
        </div>
      </div>
      {/* App icons grid */}
      <div className="relative z-10 px-6 pt-8 w-full">
        <div className="grid grid-cols-4 gap-4">
          <div className="app-icon" style={{ backgroundColor: '#6b7280' }}>
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div className="app-icon" style={{ backgroundColor: '#4b5563' }}>
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="app-icon" style={{ backgroundColor: '#374151' }}>
            <ExternalLink className="w-6 h-6 text-white" />
          </div>
          <div className="app-icon" style={{ backgroundColor: '#1f2937' }}>
            <Zap className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      {/* Dock */}
      <div className="absolute bottom-8 left-6 right-6">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 flex justify-center gap-4">
          <div className="app-icon" style={{ backgroundColor: '#6b7280' }}>
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="app-icon" style={{ backgroundColor: '#4b5563' }}>
            <Mail className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Demo Component
const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const demos = [
    { name: "Hover Effects", icon: Zap },
    { name: "Scroll Animations", icon: ChevronDown },
    { name: "Click Interactions", icon: Smartphone }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center gap-4 mb-8">
        {demos.map((demo, index) => (
          <motion.button
            key={demo.name}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeDemo === index 
                ? 'bg-white text-black' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
            onClick={() => setActiveDemo(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <demo.icon className="w-5 h-5 inline mr-2" />
            {demo.name}
          </motion.button>
        ))}
      </div>
      
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        key={activeDemo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-2xl glass-effect cursor-pointer flex items-center justify-center"
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-8 h-8 text-gray-400" />
            </motion.div>
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
      className="p-6 glass-effect rounded-2xl hover-lift group cursor-pointer relative overflow-hidden"
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
        className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <motion.div 
          className="p-3 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <skill.icon className="w-8 h-8 text-white" />
        </motion.div>
        <motion.h3 
          className="text-xl font-bold"
          whileHover={{ x: 5 }}
        >
          {skill.name}
        </motion.h3>
      </div>
      
      <motion.p 
        className="text-gray-300 mb-4 relative z-10"
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
            <span className="text-sm group-hover/tech:text-white transition-colors duration-200">{tech}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl glass-effect hover-lift cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/20"
          animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        />
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Smartphone className="w-16 h-16 text-white/80" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        {/* Floating particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      <div className="p-6 relative">
        <motion.h3 
          className="text-2xl font-bold mb-2 gradient-text"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 mb-4"
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
              className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (techIndex * 0.05) }}
              viewport={{ once: true }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        <div className="flex gap-4">
          <motion.button
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:shadow-lg transition-all duration-300 group/btn"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-200" />
            Live Demo
          </motion.button>
          <motion.button
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg font-medium glass-effect hover:bg-white/10 transition-all duration-300 group/btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Github className="w-4 h-4" />
            </motion.div>
            Code
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Data
const stats = [
  { value: "50+", label: "Projects" },
  { value: "3+", label: "Years Exp" },
  { value: "100%", label: "Satisfaction" }
];

const skills = [
  {
    name: "Flutter Development",
    icon: Smartphone,
    description: "Building cross-platform mobile applications with beautiful UIs and smooth animations.",
    technologies: ["Dart", "Flutter SDK", "Material Design", "Cupertino"]
  },
  {
    name: "UI/UX Design",
    icon: Zap,
    description: "Creating intuitive and visually appealing user interfaces with attention to detail.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  },
  {
    name: "Backend Integration",
    icon: Code,
    description: "Connecting mobile apps with robust backend services and APIs.",
    technologies: ["REST APIs", "GraphQL", "Firebase", "Node.js"]
  }
];

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured shopping app with smooth animations, payment integration, and real-time updates.",
    technologies: ["Flutter", "Firebase", "Stripe", "Push Notifications"]
  },
  {
    title: "Social Media Platform",
    description: "Instagram-like social platform with photo sharing, stories, and real-time messaging.",
    technologies: ["Flutter", "WebSocket", "Cloud Storage", "Authentication"]
  }
];

const appIcons = [
  { name: "Messages", icon: Mail, color: "#6b7280" },
  { name: "Phone", icon: Smartphone, color: "#4b5563" },
  { name: "Safari", icon: ExternalLink, color: "#374151" },
  { name: "Music", icon: Zap, color: "#1f2937" },
  { name: "Photos", icon: Star, color: "#6b7280" },
  { name: "Camera", icon: Code, color: "#4b5563" },
  { name: "Weather", icon: Smartphone, color: "#374151" },
  { name: "Clock", icon: Zap, color: "#1f2937" },
  { name: "Maps", icon: ExternalLink, color: "#6b7280" },
  { name: "Notes", icon: Mail, color: "#4b5563" },
  { name: "Reminders", icon: Star, color: "#374151" },
  { name: "Health", icon: Code, color: "#1f2937" }
];

const dockApps = [
  { name: "Phone", icon: Smartphone, color: "#6b7280" },
  { name: "Messages", icon: Mail, color: "#4b5563" },
  { name: "Safari", icon: ExternalLink, color: "#374151" },
  { name: "Music", icon: Zap, color: "#1f2937" }
];

const socialLinks = [
  { name: "GitHub", icon: Github, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Email", icon: Mail, url: "#" }
];

export default App;

