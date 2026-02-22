import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "StickmanAnimation-RNN",
    description: "Deep learning project generating stickman pose animations using an RNN trained on MediaPipe-extracted human pose keypoints. Demonstrates sequence modeling, animation generation, and RNN architecture design.",
    tech: ["Python", "RNN", "MediaPipe", "Deep Learning"],
  },
  {
    title: "Offline AI Assistant",
    description: "A lightweight offline AI assistant built with Flask and an open-source LLM (Mistral 7B), designed to run fully on CPU. Capable of launching Linux applications and scripts.",
    tech: ["Flask", "LLM", "Mistral 7B", "Python"],
  },
  {
    title: "Fraud Detection – XGBoost",
    description: "Machine learning project using XGBoost for detecting fraudulent transactions with feature engineering and class imbalance handling. Complete ML workflow from preprocessing to evaluation.",
    tech: ["XGBoost", "Scikit-learn", "Python", "ML"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={fadeUp} custom={0} className="section-heading text-center">
            Featured <span className="glow-text">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Hands-on AI/ML projects showcasing real-world problem solving.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                custom={i + 2}
                className="glass-card p-8 flex flex-col transition-all duration-300 group"
              >
                <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-chip text-xs">{t}</span>
                  ))}
                </div>
                <a
                  href="https://github.com/gauthamdv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
