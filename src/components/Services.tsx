import { motion } from "framer-motion";
import { Brain, Database, Server, FlaskConical } from "lucide-react";

const items = [
  { icon: Brain, label: "AI/ML Model Development" },
  { icon: Database, label: "Data Analysis & Preprocessing" },
  { icon: Server, label: "Backend Integration with AI" },
  { icon: FlaskConical, label: "Research & Experimental AI" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.h2 variants={fadeUp} custom={0} className="section-heading text-center">
          Open to <span className="glow-text">Opportunities</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Actively seeking roles in AI, Machine Learning, and Software Development. Open to internships, entry-level positions, and collaborative technical projects.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {items.map((item, i) => (
            <motion.div key={item.label} variants={fadeUp} custom={i + 2} className="glass-card p-6 text-center transition-all duration-300">
              <item.icon className="mx-auto mb-4 text-primary" size={28} />
              <p className="text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} custom={6} className="text-center">
          <a href="#contact" className="glow-button inline-block">Let's Connect</a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Services;
