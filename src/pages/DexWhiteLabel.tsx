import { ArrowRight, Zap, TrendingUp, Target, Repeat, BookOpen, PieChart, Shield, Gauge, Globe, Users, BarChart3, Layers, CheckCircle, Clock, DollarSign, Code, Smartphone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

const DexWhiteLabel = () => {

  const heroFeatures = [
    {
      icon: Zap,
      title: "AMM Engine",
      description: "Advanced Automated Market Making with optimized price discovery and minimal slippage for superior trading experience"
    },
    {
      icon: Target,
      title: "Concentrated Liquidity",
      description: "Capital-efficient liquidity provision with customizable price ranges for maximum returns and reduced impermanent loss"
    },
    {
      icon: TrendingUp,
      title: "Yield Farming",
      description: "Automated farming protocols with compounding rewards, multiple token incentives, and flexible staking mechanisms"
    },
    {
      icon: BookOpen,
      title: "Liquidity Book",
      description: "Next-generation concentrated liquidity technology with dynamic fee adjustment and improved capital efficiency"
    },
    {
      icon: Repeat,
      title: "Limit Orders & DCA",
      description: "Advanced order types including limit orders, stop-loss, and dollar-cost averaging strategies for professional trading"
    },
    {
      icon: PieChart,
      title: "Volatility Accumulator",
      description: "Dynamic fee structure that captures volatility premiums for enhanced protocol revenue and sustainable economics"
    }
  ];

  const technicalFeatures = [
    {
      icon: Shield,
      title: "Security First",
      details: [
        "Multi-signature treasury management",
        "Battle-tested smart contracts",
        "Comprehensive audit coverage",
        "Emergency pause mechanisms",
        "Upgradeable proxy patterns"
      ]
    },
    {
      icon: Gauge,
      title: "Performance Optimized",
      details: [
        "40% lower gas costs than competitors",
        "Sub-second transaction confirmation",
        "MEV protection mechanisms",
        "Advanced routing algorithms",
        "Batch transaction support"
      ]
    },
    {
      icon: Globe,
      title: "Multi-Chain Ready",
      details: [
        "15+ blockchain networks supported",
        "Cross-chain bridge integration",
        "Unified liquidity pools",
        "Chain-agnostic architecture",
        "Seamless asset migration"
      ]
    },
    {
      icon: Users,
      title: "Enterprise Support",
      details: [
        "24/7 technical assistance",
        "Dedicated integration team",
        "Custom feature development",
        "Performance monitoring",
        "Regular security updates"
      ]
    }
  ];

  const managementOptions = [
    {
      icon: Code,
      title: "Managed",
      metric: "Handover",
      description: "We deploy and maintain the tech, then hand over to your team while keeping it running"
    },
    {
      icon: Users,
      title: "Fully Managed",
      metric: "Dedicated",
      description: "We allocate a permanent resource exclusively to your project for ongoing management"
    }
  ];

  const businessBenefits = [
    {
      icon: Clock,
      title: "Rapid Deployment",
      metric: "2 Weeks",
      description: "From concept to mainnet launch with full feature parity"
    },
    {
      icon: DollarSign,
      title: "Cost Efficient",
      metric: "80% Savings",
      description: "Compared to building from scratch with same feature set"
    },
    {
      icon: BarChart3,
      title: "Proven Results",
      metric: "$500M+",
      description: "Total value locked across our managed solutions"
    }
  ];

  const integrationSteps = [
    {
      step: "1",
      title: "Consultation & Planning",
      description: "Technical requirements analysis and custom feature specification",
      duration: "2-3 days"
    },
    {
      step: "2",
      title: "Smart Contract Deployment",
      description: "Customized contract deployment with your specific parameters",
      duration: "3-5 days"
    },
    {
      step: "3",
      title: "Frontend Development",
      description: "White-labeled interface development with your branding",
      duration: "5-7 days"
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Comprehensive testing, security audit, and mainnet deployment",
      duration: "2-3 days"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-subtle relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-primary rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-primary font-medium mb-6">
              DEX White Label Solution
            </div>
            <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
              Launch Your <span className="bg-gradient-primary bg-clip-text text-transparent">Professional DEX</span><br />
              in Just 2 Weeks
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light mb-8">
              We manage and deliver enterprise-grade DEX infrastructure solutions for your brand. 
              Choose between our managed handover service or fully managed dedicated resource model 
              to launch and scale your decentralized exchange with industry-leading technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <ContactForm 
                trigger={
                  <Button size="lg" className="group">
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              <Button variant="outline" size="lg">
                View Technical Demo
              </Button>
            </div>
          </div>

          {/* Management Options */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {managementOptions.map((option, index) => (
              <Card key={index} className="p-8 text-center bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                <option.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">{option.metric}</div>
                <div className="text-lg font-semibold text-foreground mb-3">{option.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{option.description}</div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center bg-card/80 backdrop-blur-sm border-border/50">
                <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                <div className="text-sm font-medium text-foreground mb-2">{benefit.title}</div>
                <div className="text-xs text-muted-foreground">{benefit.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Complete <span className="bg-gradient-primary bg-clip-text text-transparent">DeFi Infrastructure</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We manage and deliver every feature you need to launch a competitive DEX, powered by our battle-tested technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {heroFeatures.map((feature, index) => (
              <Card key={index} className="group p-8 bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Technical Excellence</span> by Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We manage enterprise-grade infrastructure that scales with your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Streamlined</span> Integration Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We manage your deployment from concept to launch in just 2 weeks with our proven process
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/30 h-full flex flex-col">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 text-center">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-center flex-grow">{step.description}</p>
                </Card>
                
                <div className="text-xs text-primary font-medium text-center bg-primary/10 rounded-full px-3 py-1 mt-4 mx-auto w-fit">
                  {step.duration}
                </div>
                
                {index < integrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-0.5 bg-gradient-primary z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto max-w-5xl px-8">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Launch Your <span className="bg-gradient-primary bg-clip-text text-transparent">DEX Empire?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join successful DEX operators who trust us to manage their infrastructure. 
                Choose your management model and get a custom quote to start your journey.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-foreground">Fast Deployment</div>
                  <div className="text-sm text-muted-foreground">2 weeks to launch</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-foreground">Battle Tested</div>
                  <div className="text-sm text-muted-foreground">$500M+ secured</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-foreground">Fully Customizable</div>
                  <div className="text-sm text-muted-foreground">Your brand, your way</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactForm 
                  trigger={
                    <Button size="lg" className="group">
                      Get Custom Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  }
                />
                <Button variant="outline" size="lg">
                  Schedule Technical Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default DexWhiteLabel;