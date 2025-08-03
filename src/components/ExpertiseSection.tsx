import { Code2, Database, Coins, Globe } from "lucide-react";

const ExpertiseSection = () => {
  return (
    <section className="bg-gradient-primary text-primary-foreground relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-curaga-purple-dark/95"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90 font-medium mb-8">
              Technical Excellence
            </div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Deep <span className="text-white/90">Technical</span> Expertise
            </h2>
            <p className="text-xl leading-relaxed font-light text-white/80 mb-12">
              Our team combines years of traditional software engineering with cutting-edge blockchain development, 
              delivering solutions that are both innovative and production-ready.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Code2 className="w-8 h-8 text-white/90 mb-3" />
                <h4 className="font-semibold text-white/90 mb-2">Smart Contracts</h4>
                <p className="text-sm text-white/70">Solidity, Rust, Move</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Database className="w-8 h-8 text-white/90 mb-3" />
                <h4 className="font-semibold text-white/90 mb-2">Infrastructure</h4>
                <p className="text-sm text-white/70">Node Operations, Scaling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Coins className="w-8 h-8 text-white/90 mb-3" />
                <h4 className="font-semibold text-white/90 mb-2">DeFi Protocols</h4>
                <p className="text-sm text-white/70">AMMs, Lending, Derivatives</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Globe className="w-8 h-8 text-white/90 mb-3" />
                <h4 className="font-semibold text-white/90 mb-2">Web3 Frontend</h4>
                <p className="text-sm text-white/70">React, Next.js, Web3 SDKs</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">Blockchain Architecture</h3>
              <p className="text-lg leading-relaxed font-light text-white/80">
                From consensus mechanisms to layer-2 scaling solutions, we architect blockchain systems 
                that handle millions of transactions while maintaining decentralization and security.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">Smart Contract Security</h3>
              <p className="text-lg leading-relaxed font-light text-white/80">
                Every contract undergoes rigorous testing, formal verification, and multiple security audits. 
                We've secured over $100M in smart contract value with zero exploits.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">Cross-Chain Integration</h3>
              <p className="text-lg leading-relaxed font-light text-white/80">
                Bridge ecosystems seamlessly with our expertise in <span className="font-mono font-medium text-white/90">Ethereum</span>, 
                <span className="font-mono font-medium text-white/90"> Solana</span>, <span className="font-mono font-medium text-white/90">Polygon</span>, 
                and emerging Layer-1 blockchains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;