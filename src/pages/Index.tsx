import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Global ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top left - cyan */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(var(--glow-cyan)), transparent 70%)" }} />
        {/* Top right - purple */}
        <div className="absolute top-[10%] -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--glow-purple)), transparent 70%)" }} />
        {/* Mid left - pink */}
        <div className="absolute top-[35%] -left-20 w-[400px] h-[400px] rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--glow-pink)), transparent 70%)" }} />
        {/* Center - blue */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--glow-blue)), transparent 70%)" }} />
        {/* Bottom right - emerald */}
        <div className="absolute bottom-[10%] -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--glow-emerald)), transparent 70%)" }} />
        {/* Bottom left - purple */}
        <div className="absolute -bottom-20 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--glow-purple)), transparent 70%)" }} />

        {/* Noise / grain overlay for texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(hsl(var(--glow-cyan) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--glow-cyan) / 0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
