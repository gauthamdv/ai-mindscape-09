import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated bg elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-primary font-medium mb-3 tracking-wider text-sm uppercase">AI & Machine Learning Engineer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
              Hi, I'm <span className="glow-text">Gautham DV</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-3 font-medium">
              B.E. in AI & ML (CGPA 8.69) · Python Developer · Deep Learning Enthusiast
            </p>
            <p className="text-muted-foreground/80 max-w-xl mb-8 leading-relaxed">
              A passionate AI/ML graduate from Acharya Institute of Technology (VTU) with hands-on experience in Machine Learning, Deep Learning, and building impactful, efficient AI-driven software solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="#projects" className="glow-button">View Projects</a>
              <a href="#contact" className="glow-button-outline">Contact Me</a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/gautham-dv/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/gauthamdv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={22} />
              </a>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating glow ring */}
              <div className="absolute -inset-3 rounded-full profile-glow animate-spin-slow opacity-60 blur-sm" />
              <div className="absolute inset-0 rounded-full bg-background" />
              <img
                src={profileImg}
                alt="Gautham DV"
                className="relative w-full h-full rounded-full object-cover border-2 border-primary/30"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
