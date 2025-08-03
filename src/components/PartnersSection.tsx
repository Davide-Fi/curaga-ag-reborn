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
    <section className="bg-gradient-primary text-primary-foreground relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-curaga-purple-dark/95"></div>
      <div className="container mx-auto max-w-6xl px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90 font-medium mb-6">
            Trusted Partners
          </div>
          <h3 className="text-4xl font-bold text-white mb-4">Powering Innovation Together</h3>
          <div className="w-24 h-1 bg-white/40 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="group flex justify-center items-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-16 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;