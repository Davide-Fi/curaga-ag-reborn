import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto max-w-6xl px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              A <strong>R&D</strong> company providing <strong>Blockchain</strong> and{" "}
              <strong>NFT</strong> development services.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Dedicated to building cutting-edge products for the decentralized web by 
              developing scalable, secure, and user-centric Web3 solutions.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Curaga aims to shape the future of decentralized marketplaces and applications.
            </p>
          </div>
          <div className="lg:flex lg:justify-end">
            <img 
              src={heroImage} 
              alt="Curaga Hero" 
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;