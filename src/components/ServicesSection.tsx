const ServicesSection = () => {
  const services = [
    {
      title: "Blockchain Integration",
      description: "Researching the latest trends to unleash Decentralized Finance we develop solutions that use the most innovative technology in the market.",
      tagline: "We don't adapt, we innovate."
    },
    {
      title: "Smart Contract Engineering", 
      description: "Developing secure and efficient smart contracts to automate processes and ensure trustless interactions."
    },
    {
      title: "Marketplace Development",
      description: "Marketplace operations, quant research, and optimizations are all necessary aspects of a successful blockchain projects that courage offers to their partners.",
      tagline: "Proven experience that lasts beyond cycles."
    },
    {
      title: "NFT",
      description: "NFT represent one of the most interesting innovations in the sector.",
      additional: "By offering NFT development and marketing we support projects to focus on the art and the community"
    }
  ];

  return (
    <section className="bg-gradient-subtle relative">
      <div className="container mx-auto max-w-6xl px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">Our services</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-card/80 backdrop-blur-sm p-10 rounded-3xl shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
                {service.additional && (
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    {service.additional}
                  </p>
                )}
                {service.tagline && (
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-lg font-semibold text-primary italic">
                      {service.tagline}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;