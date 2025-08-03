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
    <section className="bg-background">
      <div className="container mx-auto max-w-6xl px-8 py-20">
        <h3 className="text-2xl font-bold mb-12 text-foreground">Our partners</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;