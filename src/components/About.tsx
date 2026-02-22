import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={fadeUp} custom={0} className="section-heading text-center">
            About <span className="glow-text">Me</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Naturally curious and enthusiastic, passionate about building impactful AI-driven solutions with a strong learning mindset and adaptability.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Education */}
            <motion.div variants={fadeUp} custom={2} className="glass-card p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--glow-cyan) / 0.1)" }}>
                  <GraduationCap style={{ color: "hsl(var(--glow-cyan))" }} size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Education</h3>
                  <p className="text-muted-foreground text-sm">May 2025</p>
                </div>
              </div>
              <h4 className="font-semibold mb-1">B.E. in AI & Machine Learning</h4>
              <p className="text-muted-foreground text-sm mb-2">Acharya Institute of Technology (VTU)</p>
              <div className="tech-chip inline-block">CGPA: 8.69</div>
            </motion.div>

            {/* Internship */}
            <motion.div variants={fadeUp} custom={3} className="glass-card p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--glow-purple) / 0.1)" }}>
                  <Briefcase style={{ color: "hsl(var(--glow-purple))" }} size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Internship</h3>
                  <p className="text-muted-foreground text-sm">Sep – Nov 2025</p>
                </div>
              </div>
              <h4 className="font-semibold mb-1">AI & ML Intern</h4>
              <p className="text-muted-foreground text-sm mb-2">Elevate Labs</p>
              <p className="text-muted-foreground text-sm">
                Worked on machine learning models, sequence modeling, and real-world problem solving with cutting-edge AI tools.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
