import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowLogo(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // If we're already on the homepage, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img 
              src="/lovable-uploads/561794b8-8c4c-4f17-b4dd-857045eecab2.png" 
              alt="Curaga" 
              className={`h-16 transition-opacity duration-300 ${showLogo ? 'opacity-100' : 'opacity-0'}`} 
            />
          </Link>
          
          <nav className="flex items-center justify-center space-x-4 md:space-x-8 text-sm md:text-base">
            <button 
              onClick={() => scrollToSection('expertise')}
              className="hidden md:block text-foreground hover:text-primary transition-colors duration-200"
            >
              Expertise
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Services
            </button>
            <Link 
              to="/dex-white-label"
              className="relative bg-gradient-primary bg-clip-text text-transparent font-semibold hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:inset-0 after:bg-gradient-primary after:opacity-10 after:rounded-lg after:blur-sm after:-z-10 text-center"
            >
              Launch your Dex
            </Link>
            <ContactForm
              trigger={
                <Button className="bg-gradient-primary text-white px-3 py-2 md:px-6 rounded-xl hover:shadow-glow transition-all duration-300">
                  Get in Touch
                </Button>
              }
            />
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;