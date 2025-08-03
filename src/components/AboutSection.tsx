import { Shield, Rocket, Users, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Military-grade security audits and best practices ensure your Web3 projects are bulletproof against threats."
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "We don't just follow trends – we create them. Our R&D team pushes the boundaries of what's possible."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Former Big Tech engineers, blockchain pioneers, and DeFi architects working exclusively on your success."
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Every line of code, every strategy decision is optimized for measurable business impact and user adoption."
    }
  ];

  return (
    <section id="about" className="bg-background relative py-32">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-primary font-medium mb-6">
            Why Choose Curaga
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Where <span className="bg-gradient-primary bg-clip-text text-transparent">Innovation</span> Meets <span className="bg-gradient-primary bg-clip-text text-transparent">Execution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            We're not just another development agency. We're your strategic partner in building 
            the next generation of decentralized solutions that matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center space-y-6 p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;