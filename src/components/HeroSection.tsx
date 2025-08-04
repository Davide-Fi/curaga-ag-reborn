import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const heroImage = "/lovable-uploads/561794b8-8c4c-4f17-b4dd-857045eecab2.png";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToExpertise = () => {
    const element = document.getElementById('expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    navigate('/dex-white-label');
  };
  return <section className="relative bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-curaga-purple/30 rounded-full blur-3xl opacity-20 animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Text content - left side */}
          <div className="flex-[2] space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <div className="text-foreground">Build the Future of</div>
              <div className="text-foreground">Web3 Applications</div>
            </h1>
            
            {/* Description and CTA */}
            <div className="space-y-8 max-w-3xl lg:mx-0 mx-auto">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
                Experienced R&D consultancy specializing in cutting-edge blockchain solutions, smart contract engineering, and decentralized applications that drive real innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-2xl group"
                  onClick={handleStartProject}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 rounded-2xl"
                  onClick={scrollToExpertise}
                >
                  <Code className="w-5 h-5 mr-2" />
                  View Our Work
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Protocols Built</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">$5B+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Value Created</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo - right side, vertically centered */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 flex-[1]">
            <div className="relative animate-scale-in">
              {/* Purple background behind logo */}
              <div className="absolute inset-0 w-96 h-96 bg-curaga-purple/20 rounded-full blur-3xl opacity-30 animate-float" style={{
                animationDelay: '1s'
              }}></div>
              <img src={heroImage} alt="Curaga Web3 Innovation" className="w-full max-w-xs sm:max-w-sm lg:max-w-md relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;