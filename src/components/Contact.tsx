import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("gauthamdv19@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:gauthamdv19@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={fadeUp} custom={0} className="section-heading text-center">
            Get In <span className="glow-text">Touch</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Feel free to reach out for collaborations, opportunities, or just a chat about AI.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Info */}
            <motion.div variants={fadeUp} custom={2} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">gauthamdv19@gmail.com</span>
                    <button onClick={copyEmail} className="text-muted-foreground hover:text-primary transition-colors">
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <span className="text-sm">+91 7338022760</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <span className="text-sm">Bangalore, India</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://www.linkedin.com/in/gautham-dv/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/gauthamdv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form variants={fadeUp} custom={3} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted-foreground/50"
              />
              <button type="submit" className="glow-button w-full">Send Message</button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
