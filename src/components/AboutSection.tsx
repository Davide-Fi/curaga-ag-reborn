const AboutSection = () => {
  return (
    <section className="bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-curaga-purple-dark/90"></div>
      <div className="container mx-auto max-w-6xl px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 leading-tight">About our company</h2>
            <div className="inline-block">
              <h3 className="text-xl font-semibold mb-6 text-primary-foreground/90 tracking-wider uppercase">
                OUR PURPOSE
              </h3>
              <div className="w-16 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl leading-relaxed font-light">
                Curaga is specialized in providing high-quality expertise and development 
                in the blockchain sector.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl leading-relaxed font-light">
                From NFT marketplace to blockchain operations with the use of Smart Contract, 
                Curaga helps projects built on the blockchain to execute and simplify complex 
                scenarios to achieve their goals.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl leading-relaxed font-light">
                From coding in <span className="font-mono font-medium text-white/90">Solidity</span>, <span className="font-mono font-medium text-white/90">Rust</span>, and the most modern smart-contract programming 
                to running high-performance front end in <span className="font-mono font-medium text-white/90">React</span>, to running Nodes on multiple 
                blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;