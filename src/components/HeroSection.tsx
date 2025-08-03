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
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Text content - left side on desktop, top on mobile */}
          <div className="flex-1 space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Build the Future of</span>
              <br />
              <span className="text-foreground">Web3 Applications</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl lg:mx-0 mx-auto">Experienced R&D consultancy specializing in cutting-edge blockchain solutions, smart contract engineering, and decentralized applications that drive real innovation.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-2xl group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 rounded-2xl">
                <Code className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">$100M+</div>
                <div className="text-sm text-muted-foreground">Value Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Logo - top on mobile, right side on desktop */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img src={heroImage} alt="Curaga Web3 Innovation" className="w-full max-w-md lg:max-w-lg animate-scale-in" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;