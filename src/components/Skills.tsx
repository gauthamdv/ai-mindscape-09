import { motion } from "framer-motion";

const categories = [
  {
    title: "Machine Learning & Deep Learning",
    icon: "🧠",
    chipClass: "tech-chip",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "XGBoost", "PyTorch", "RNN Architectures", "Sequence Modeling", "CNNs", "Model Evaluation", "Hyperparameter Tuning"],
  },
  {
    title: "Data Science & Analytics",
    icon: "📊",
    chipClass: "tech-chip tech-chip-purple",
    skills: ["Python", "Data Preprocessing", "Feature Engineering", "Big Data Analytics", "Pandas", "NumPy", "Matplotlib", "Handling Class Imbalance", "Statistical Analysis", "Data Visualization"],
  },
  {
    title: "Web & Deployment",
    icon: "🚀",
    chipClass: "tech-chip tech-chip-emerald",
    skills: ["Flask", "Django", "REST APIs", "Backend + AI Integration", "Git & GitHub", "Linux", "Docker", "Model Deployment", "SQL", "LLM Integration"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={fadeUp} custom={0} className="section-heading text-center">
            Technical <span className="glow-text">Skills</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A focused toolkit for building intelligent systems, from data to deployment.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                custom={i + 2}
                className="glass-card p-8 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="font-display font-semibold text-base text-foreground mb-6">{cat.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, si) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + si * 0.04, duration: 0.3 }}
                      className={cat.chipClass}
                    >
                      {s}
                    </motion.span>
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
