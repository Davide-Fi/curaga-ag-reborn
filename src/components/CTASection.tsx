import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-secondary/20 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-curaga-purple/30 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto max-w-5xl px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-primary font-medium">
            Ready to Build?
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Let's Build the
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Future Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Whether you're a startup with a groundbreaking idea or an enterprise ready to embrace Web3, 
            we're here to turn your vision into reality. No project is too ambitious for our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <ContactForm
              trigger={
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-10 py-6 rounded-2xl group">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              }
            />
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 text-lg px-10 py-6 rounded-2xl">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Strategy Call
            </Button>
          </div>
          
          <div className="pt-12 border-t border-border/30 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Free</div>
                <div className="text-muted-foreground">Initial Consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Confidential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;