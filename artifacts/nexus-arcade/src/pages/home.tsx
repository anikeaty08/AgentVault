import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Terminal, 
  Layers, 
  GitBranch, 
  Cpu, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  LayoutTemplate, 
  Zap,
  Globe,
  Lock,
  Box
} from "lucide-react";
import { Button } from "@/components/ui/button";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground scanline selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-primary flex items-center justify-center neon-border-cyan">
              <Layers className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-foreground">NEXUS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            <a href="#features" className="hover:text-primary transition-colors cursor-pointer" data-testid="nav-features">Features</a>
            <a href="#process" className="hover:text-primary transition-colors cursor-pointer" data-testid="nav-process">Process</a>
            <a href="#pricing" className="hover:text-primary transition-colors cursor-pointer" data-testid="nav-pricing">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex font-mono text-xs uppercase" data-testid="nav-login">
              Login
            </Button>
            <Button className="font-mono text-xs uppercase bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan rounded-none" data-testid="nav-cta">
              Insert Coin
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center border-b border-border bg-grid-pattern">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 m-6"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 m-6"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 m-6"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 m-6"></div>
          
          <div className="container mx-auto px-6 py-20 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/30 bg-primary/5 rounded-none">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-mono text-xs tracking-widest text-primary uppercase">System Online V.2.4</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black mb-6 uppercase leading-none">
                The Creative <br/>
                <span className="text-gradient-cyan-pink">OS For Design</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl font-light">
                Manage design systems, version ideas, and align creative teams. Built for directors who demand precision and power.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                <Button size="lg" className="h-14 px-8 text-base uppercase font-mono font-bold bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan rounded-none group" data-testid="hero-cta-primary">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base uppercase font-mono border-muted-foreground/30 hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-colors rounded-none" data-testid="hero-cta-secondary">
                  View Demo
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <div className="font-display text-3xl font-bold text-foreground mb-1">12,000+</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Creators</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-foreground mb-1">2.4M</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Ideas Managed</div>
                </div>
                <div className="hidden md:block">
                  <div className="font-display text-3xl font-bold text-foreground mb-1">500+</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Design Teams</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Showcase */}
        <section id="features" className="py-32 relative border-b border-border bg-card">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20 text-center max-w-3xl mx-auto"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black uppercase mb-6 text-foreground">
                Power Up Your <span className="text-primary">Workflow</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
                Everything you need to turn raw ideas into structured design systems without losing the creative spark.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Layers className="w-8 h-8" />,
                  title: "Concept Boards",
                  desc: "Infinite canvas for infinite ideas. Group, tag, and connect concepts organically."
                },
                {
                  icon: <GitBranch className="w-8 h-8" />,
                  title: "Version Control",
                  desc: "Branch ideas. Merge concepts. Never lose the 'what if' again."
                },
                {
                  icon: <LayoutTemplate className="w-8 h-8" />,
                  title: "System Management",
                  desc: "Extract reusable components directly from concept boards into a centralized library."
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "AI Ideation",
                  desc: "Generate variants and explore tangential ideas with integrated AI assistance."
                },
                {
                  icon: <Terminal className="w-8 h-8" />,
                  title: "Code Export",
                  desc: "Translate design tokens and layouts directly into React/Tailwind code."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Multiplayer",
                  desc: "Real-time collaboration with cursor tracking and role-based permissions."
                }
              ].map((feat, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative p-8 bg-background border border-border hover:border-primary/50 transition-colors rounded-none"
                  data-testid={`feature-card-${i}`}
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-primary mb-6 group-hover:text-secondary transition-colors group-hover:scale-110 transform origin-left duration-300">
                      {feat.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase mb-3 text-foreground">{feat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-32 relative border-b border-border bg-grid-pattern">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:w-1/2"
              >
                <motion.div variants={fadeUp} className="font-mono text-xs tracking-widest text-secondary uppercase mb-4">How It Works</motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black uppercase mb-8">
                  From Chaos to <br/> <span className="text-gradient-cyan-pink">Clarity</span>
                </motion.h2>
                
                <div className="space-y-8">
                  {[
                    { num: "01", title: "Dump Ideas", desc: "Throw everything onto the board. No structure required." },
                    { num: "02", title: "Find Patterns", desc: "Our AI helps group similar concepts and extract tokens." },
                    { num: "03", title: "Build Systems", desc: "Solidify ideas into components, variables, and code." }
                  ].map((step, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-6">
                      <div className="font-display text-4xl font-black text-border group-hover:text-primary transition-colors">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold uppercase mb-2 text-foreground">{step.title}</h4>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/2 w-full aspect-square md:aspect-video bg-card border border-primary/30 p-4 relative neon-border-cyan"
              >
                {/* Mock UI inside the panel */}
                <div className="w-full h-full border border-border bg-background relative overflow-hidden flex flex-col">
                  <div className="h-8 border-b border-border flex items-center px-4 gap-2 bg-muted/20">
                    <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary/80"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                  </div>
                  <div className="flex-1 p-6 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,231,0.1)_0%,transparent_60%)]"></div>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md relative z-10">
                      <div className="h-24 bg-card border border-border flex items-center justify-center text-primary"><Box /></div>
                      <div className="h-24 bg-card border border-primary/50 shadow-[0_0_15px_rgba(0,255,231,0.2)] flex items-center justify-center text-primary"><Layers /></div>
                      <div className="h-24 bg-card border border-border flex items-center justify-center text-primary"><LayoutTemplate /></div>
                      <div className="h-24 bg-card border border-border flex items-center justify-center text-primary"><Terminal /></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials Section */}
        <section id="testimonials" className="py-32 relative border-b border-border bg-background">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.div variants={fadeUp} className="font-mono text-xs tracking-widest text-primary uppercase mb-4">Transmission Logs</motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black uppercase mb-6 text-foreground">
                High <span className="text-primary">Scores</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Nexus is the only tool that keeps up with our creative chaos while still enforcing the strict design system rules we need for production.",
                  author: "Elena R.",
                  role: "Creative Director, VORTEX"
                },
                {
                  quote: "It literally feels like jacking into the matrix. The speed at which we can iterate on concepts and export to code is terrifying.",
                  author: "Marcus T.",
                  role: "Lead Designer, NEON LABS"
                },
                {
                  quote: "Before Nexus, our ideas died in Figma files. Now they live, branch, and evolve in a system that actually makes sense.",
                  author: "Sarah K.",
                  role: "Head of Product, SYNTHESIS"
                }
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card border border-border p-8 relative group hover:border-secondary/50 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-secondary opacity-0 group-hover:opacity-100 transition-opacity m-2"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-secondary opacity-0 group-hover:opacity-100 transition-opacity m-2"></div>
                  <div className="mb-6 text-secondary font-display text-4xl">"</div>
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed relative z-10">{testimonial.quote}</p>
                  <div>
                    <div className="font-display font-bold uppercase text-foreground">{testimonial.author}</div>
                    <div className="font-mono text-xs text-primary tracking-widest">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-32 relative border-b border-border">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black uppercase mb-6 text-foreground">
                Access <span className="text-secondary">Granted</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border p-8"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Pro</div>
                <div className="text-4xl font-display font-black mb-6">$29<span className="text-lg text-muted-foreground">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited boards', '30-day version history', 'Basic code export', 'Up to 5 team members'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-none uppercase font-mono text-xs tracking-wider" variant="outline" data-testid="pricing-pro">
                  Select Pro
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-background border border-primary p-8 neon-border-cyan relative"
              >
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-mono uppercase px-3 py-1 tracking-widest">
                  Popular
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Agency</div>
                <div className="text-4xl font-display font-black mb-6">$99<span className="text-lg text-muted-foreground">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  {['Everything in Pro', 'Unlimited version history', 'Advanced API access', 'Unlimited team members', 'Custom AI models'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary" /> {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-none uppercase font-mono text-xs tracking-wider bg-primary text-primary-foreground hover:bg-primary/90" data-testid="pricing-agency">
                  Select Agency
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative bg-grid-pattern overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,45,120,0.15)_0%,transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto"
            >
              <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                Ready to Enter <br/> The Arcade?
              </motion.h2>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="h-16 px-10 text-lg uppercase font-mono font-bold bg-secondary text-primary-foreground hover:bg-secondary/90 neon-border-pink rounded-none group w-full sm:w-auto" data-testid="final-cta-btn">
                  Initialize Project
                  <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-muted-foreground flex items-center justify-center">
              <Layers className="w-3 h-3 text-muted-foreground" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-muted-foreground">NEXUS</span>
          </div>
          
          <div className="text-sm font-mono text-muted-foreground flex gap-6 uppercase">
            <a href="#" className="hover:text-primary transition-colors" data-testid="footer-terms">Terms</a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="footer-privacy">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="footer-contact">Contact</a>
          </div>
          
          <div className="text-xs text-muted-foreground/50 font-mono uppercase">
            © 2025 Nexus Systems. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
