const AboutSection = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">About our company</h2>
            <h3 className="text-xl font-semibold mb-6 text-primary-foreground/90">
              OUR PURPOSE
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Curaga is specialized in providing high-quality expertise and development 
              in the blockchain sector.
            </p>
            <p className="text-lg leading-relaxed">
              From NFT marketplace to blockchain operations with the use of Smart Contract, 
              Curaga helps projects built on the blockchain to execute and simplify complex 
              scenarios to achieve their goals.
            </p>
            <p className="text-lg leading-relaxed">
              From coding in Solidity, Rust, and the most modern smart-contract programming 
              to running high-performance front end in React, to running Nodes on multiple 
              blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;