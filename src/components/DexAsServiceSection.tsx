import { ArrowRight, Zap, TrendingUp, Target, Repeat, BookOpen, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const DexAsServiceSection = () => {
  const features = [
    {
      icon: Zap,
      title: "AMM Engine",
      description: "Advanced Automated Market Making with optimized price discovery and minimal slippage"
    },
    {
      icon: Target,
      title: "Concentrated Liquidity",
      description: "Capital-efficient liquidity provision with customizable price ranges for maximum returns"
    },
    {
      icon: TrendingUp,
      title: "Yield Farming",
      description: "Automated farming protocols with compounding rewards and multiple token incentives"
    },
    {
      icon: BookOpen,
      title: "Liquidity Book",
      description: "Next-generation concentrated liquidity technology with dynamic fee adjustment"
    },
    {
      icon: Repeat,
      title: "Limit Orders & DCA",
      description: "Advanced order types including limit orders and dollar-cost averaging strategies"
    },
    {
      icon: PieChart,
      title: "Volatility Accumulator",
      description: "Dynamic fee structure that captures volatility premiums for enhanced protocol revenue"
    }
  ];

  const stats = [
    { label: "Integration Time", value: "2 Weeks", sublabel: "From concept to launch" },
    { label: "Gas Efficiency", value: "40%", sublabel: "Lower than competitors" },
    { label: "Uptime", value: "99.9%", sublabel: "Battle-tested reliability" },
    { label: "Supported Chains", value: "15+", sublabel: "Multi-chain ready" }
  ];

  return (
    <section id="dex-service" className="bg-gradient-subtle relative py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-primary font-medium mb-6">
            DEX White Label
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Launch Your <span className="bg-gradient-primary bg-clip-text text-transparent">DEX in Weeks</span>, Not Months
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light mb-8">
            Curaga's modular DEX infrastructure empowers projects with enterprise-grade trading technology. 
            From AMM to advanced DeFi features, get everything you need to launch a competitive decentralized exchange.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Complete DEX Infrastructure
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our battle-tested technology stack powers millions in daily volume across multiple chains. 
                Get the same infrastructure used by leading DEXes, customized for your project's needs.
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="group bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-gradient-primary p-1 rounded-3xl">
              <div className="bg-background rounded-[calc(1.5rem-4px)] p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Ready in 2 Weeks</h4>
                  <p className="text-muted-foreground">From integration to mainnet launch</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Smart Contracts</span>
                    <span className="text-sm text-primary">✓ Deployed</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Frontend Interface</span>
                    <span className="text-sm text-primary">✓ Customized</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Liquidity Mining</span>
                    <span className="text-sm text-primary">✓ Configured</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Analytics Dashboard</span>
                    <span className="text-sm text-primary">✓ Integrated</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-primary rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Launch Your DEX?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the next generation of decentralized exchanges powered by Curaga's infrastructure. 
              Get a custom quote and technical consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" onClick={() => window.open('/dex-white-label', '_blank')}>
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DexAsServiceSection;