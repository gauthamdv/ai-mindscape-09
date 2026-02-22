import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming",
    skills: ["Python"],
  },
  {
    title: "ML & Deep Learning",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "XGBoost", "RNN Architectures", "Sequence Modeling"],
  },
  {
    title: "Data & Analytics",
    skills: ["Data Preprocessing", "Feature Engineering", "Big Data Analytics", "Model Evaluation", "Handling Class Imbalance"],
  },
  {
    title: "Web & Deployment",
    skills: ["Flask", "Django", "Backend + AI Integration"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={fadeUp} custom={0} className="section-heading text-center">
            Technical <span className="glow-text">Skills</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A focused toolkit for building intelligent systems, from data to deployment.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div key={cat.title} variants={fadeUp} custom={i + 2} className="glass-card p-6 transition-all duration-300">
                <h3 className="font-display font-semibold text-sm text-primary mb-4 uppercase tracking-wider">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="tech-chip text-xs">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
