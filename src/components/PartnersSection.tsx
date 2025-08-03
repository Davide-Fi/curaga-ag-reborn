import avaLabsLogo from "@/assets/ava-labs-logo.svg";
import monadLogo from "@/assets/monad-logo.webp";
import lfgLogo from "@/assets/lfg-logo.webp";
import mantleLogo from "@/assets/mantle-logo.svg";
import chainlinkLogo from "@/assets/chainlink-logo.png";

const PartnersSection = () => {
  const partners = [
    { name: "Ava Labs", logo: avaLabsLogo },
    { name: "Monad", logo: monadLogo },
    { name: "LFG", logo: lfgLogo },
    { name: "Mantle", logo: mantleLogo },
    { name: "Chainlink", logo: chainlinkLogo }
  ];

  return (
    <section className="bg-background relative">
      <div className="container mx-auto max-w-6xl px-8 py-24">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">Our partners</h3>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="group flex justify-center items-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/60 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-16 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;