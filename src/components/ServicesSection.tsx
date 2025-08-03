import { Brain, Zap, Shield, Palette } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Blockchain R&D",
      description: "Custom blockchain research and protocol development that pushes the boundaries of what's possible in decentralized systems.",
      features: ["Protocol Design", "Consensus Research", "Tokenomics Modeling", "Performance Optimization"],
      highlight: "Leading-edge research that becomes tomorrow's standards"
    },
    {
      icon: Zap,
      title: "Smart Contract Engineering", 
      description: "Battle-tested smart contracts that handle millions in value with gas-optimized code and bulletproof security.",
      features: ["DeFi Protocols", "NFT Collections", "DAOs & Governance", "Cross-chain Bridges"],
      highlight: "Zero exploits across $100M+ in secured value"
    },
    {
      icon: Shield,
      title: "Enterprise Web3 Integration",
      description: "Transform traditional businesses with Web3 infrastructure that scales enterprise needs while maintaining decentralization.",
      features: ["Legacy System Integration", "Scalability Solutions", "Compliance Framework", "Enterprise Training"],
      highlight: "Seamless Web3 adoption for Fortune 500 companies"
    },
    {
      icon: Palette,
      title: "DApp Development",
      description: "Full-stack decentralized applications with intuitive UX that makes Web3 accessible to mainstream users.",
      features: ["User-Centric Design", "Mobile-First Approach", "Multi-chain Support", "Analytics Dashboard"],
      highlight: "10x higher user engagement than industry average"
    }
  ];

  return (
    <section id="services" className="bg-gradient-subtle relative py-32">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-primary font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">Web3 Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            From groundbreaking research to production-ready applications, we deliver end-to-end Web3 solutions 
            that drive real business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-card/80 backdrop-blur-sm p-12 rounded-3xl shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-muted-foreground bg-background/50 rounded-lg px-3 py-2 border border-border/30">
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-border/30">
                  <p className="text-base font-semibold text-primary italic">
                    {service.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;