import { useState, useEffect } from "react";
import { ArrowRight, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeBackground, loadImageFromUrl } from "@/utils/imageProcessing";

const heroImage = "/lovable-uploads/05d099ea-23e4-4638-b786-16093f5b6026.png";
const HeroSection = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(heroImage);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        const img = await loadImageFromUrl(heroImage);
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Fallback to original image
        setProcessedImageUrl(heroImage);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);
  return <section className="relative bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-curaga-purple/30 rounded-full blur-3xl opacity-20 animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto max-w-7xl px-8 py-20 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-float"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-curaga-purple/20 rounded-3xl blur-2xl"></div>
              <img src={processedImageUrl} alt="Curaga Web3 Innovation" className="relative w-full max-w-md animate-scale-in" />
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in text-center">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Build the Future of</span>
              <br />
              <span className="text-foreground">Web3 Applications</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">Experienced R&D consultancy specializing in cutting-edge blockchain solutions, smart contract engineering, and decentralized applications that drive real innovation.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-2xl group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 rounded-2xl">
                <Code className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 justify-center">
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
        </div>
      </div>
    </section>;
};
export default HeroSection;