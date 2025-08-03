import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage = "/lovable-uploads/561794b8-8c4c-4f17-b4dd-857045eecab2.png";

const HeroSection = () => {
  return <section className="relative bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-curaga-purple/30 rounded-full blur-3xl opacity-20 animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto max-w-7xl px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-fade-in">
            <span className="text-foreground block">Build the Future of</span>
            <span className="text-foreground block">Web3 Applications</span>
          </h1>
          
          {/* Logo - centered between title and description */}
          <div className="flex justify-center animate-scale-in">
            <img src={heroImage} alt="Curaga Web3 Innovation" className="w-full max-w-xs sm:max-w-sm lg:max-w-md" />
          </div>
          
          {/* Description and CTA */}
          <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
              Experienced R&D consultancy specializing in cutting-edge blockchain solutions, smart contract engineering, and decentralized applications that drive real innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-2xl group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 rounded-2xl">
                <Code className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 justify-center">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">$100M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Value Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;