import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-curaga-purple/30 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto max-w-7xl px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-primary font-medium">
              <Zap className="w-4 h-4" />
              Web3 Innovation Leaders
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Curaga</span>
              <br />
              <span className="text-foreground">Shapes the</span>
              <br />
              <span className="text-foreground">Future of</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Web3</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              Elite R&D consultancy specializing in cutting-edge blockchain solutions, 
              smart contract engineering, and decentralized applications that drive real innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-2xl group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 rounded-2xl">
                <Code className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$100M+</div>
                <div className="text-sm text-muted-foreground">Value Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          <div className="lg:flex lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-float"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-curaga-purple/20 rounded-3xl blur-2xl"></div>
              <img 
                src={heroImage} 
                alt="Curaga Web3 Innovation" 
                className="relative w-full max-w-lg rounded-3xl shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;