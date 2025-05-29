
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            I'm always excited to meet new people, share ideas, and explore opportunities for collaboration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Email Me</h3>
              <p className="text-blue-200">
                Drop me a line and I'll get back to you as soon as possible.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-blue-200">
                Currently based in Warsaw, Poland
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Let's Chat</h3>
              <p className="text-blue-200">
                Open to discussions about projects, opportunities, or just life in general.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => window.location.href = 'mailto:your.email@example.com'}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
