import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-8">
        <div className="flex items-center justify-between">
          <img src="/lovable-uploads/05d099ea-23e4-4638-b786-16093f5b6026.png" alt="Curaga" className="h-20" />
          
          <nav className="hidden md:flex items-center space-x-8">
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