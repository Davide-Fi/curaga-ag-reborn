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
    <section className="bg-background">
      <div className="container mx-auto max-w-6xl px-8 py-20">
        <h2 className="text-4xl font-bold mb-16 text-foreground">Our services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              <p className="text-lg text-foreground leading-relaxed">
                {service.description}
              </p>
              {service.additional && (
                <p className="text-lg text-foreground leading-relaxed">
                  {service.additional}
                </p>
              )}
              {service.tagline && (
                <p className="text-lg font-semibold text-primary italic">
                  {service.tagline}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;