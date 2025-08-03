import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto max-w-6xl px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <p className="text-xl text-foreground leading-relaxed font-light">
              A <strong className="font-semibold text-primary">R&D</strong> company providing <strong className="font-semibold text-primary">Blockchain</strong> and{" "}
              <strong className="font-semibold text-primary">NFT</strong> development services.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Dedicated to building cutting-edge products for the decentralized web by 
              developing scalable, secure, and user-centric Web3 solutions.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Curaga aims to shape the future of decentralized marketplaces and applications.
            </p>
          </div>
          <div className="lg:flex lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-float"></div>
              <img 
                src={heroImage} 
                alt="Curaga Hero" 
                className="relative w-full max-w-md rounded-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;