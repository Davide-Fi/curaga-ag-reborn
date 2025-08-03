import React from 'react';
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: 'About', onClick: () => scrollToSection('about') },
  { label: 'Expertise', onClick: () => scrollToSection('expertise') },
  { label: 'Services', onClick: () => scrollToSection('services') },
  { label: 'Partners', onClick: () => scrollToSection('partners') },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = React.memo(() => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/10">
      <div className="container mx-auto max-w-6xl px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/561794b8-8c4c-4f17-b4dd-857045eecab2.png" 
              alt="Curaga" 
              className="h-16" 
            />
          </Link>
          
          <nav className="flex items-center space-x-4 md:space-x-8 text-sm md:text-base">
            {navItems.map((item) => (
              <button 
                key={item.label}
                onClick={item.onClick}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            
            <Link 
              to="/dex-white-label"
              className="relative bg-gradient-primary bg-clip-text text-transparent font-semibold hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:inset-0 after:bg-gradient-primary after:opacity-10 after:rounded-lg after:blur-sm after:-z-10"
            >
              {isMobile ? 'DEX' : 'DEX White Label'}
            </Link>
            
            <ContactForm
              trigger={
                <Button className="bg-gradient-primary text-white px-6 py-2 rounded-xl hover:shadow-glow transition-all duration-300">
                  {isMobile ? 'Contact' : 'Get in Touch'}
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