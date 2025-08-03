import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/10">
      <div className="container mx-auto max-w-6xl px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="/lovable-uploads/561794b8-8c4c-4f17-b4dd-857045eecab2.png" alt="Curaga" className="h-16" />
          </Link>
          
          <nav className="flex items-center space-x-4 md:space-x-8 text-sm md:text-base">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('expertise')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Expertise
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Partners
            </button>
            <Link 
              to="/dex-white-label"
              className="relative bg-gradient-primary bg-clip-text text-transparent font-semibold hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:inset-0 after:bg-gradient-primary after:opacity-10 after:rounded-lg after:blur-sm after:-z-10"
            >
              DEX White Label
            </Link>
            <ContactForm
              trigger={
                <Button className="bg-gradient-primary text-white px-6 py-2 rounded-xl hover:shadow-glow transition-all duration-300">
                  Get in Touch
                </Button>
              }
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;