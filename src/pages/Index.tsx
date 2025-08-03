import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
import DexAsServiceSection from "@/components/DexAsServiceSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a scroll target from navigation
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <DexAsServiceSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default Index;
