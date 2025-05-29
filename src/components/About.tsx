
import { GraduationCap, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Hello! I'm Enes Talha Kanar, a dedicated student currently pursuing my education 
              in the beautiful city of Warsaw, Poland. I'm passionate about learning, exploring 
              new ideas, and constantly challenging myself to grow both personally and academically.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Living in Warsaw has given me incredible opportunities to experience a rich culture, 
              meet amazing people from diverse backgrounds, and develop a global perspective that 
              shapes my approach to life and learning.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center text-slate-700">
                <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Student</span>
              </div>
              <div className="flex items-center text-slate-700">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Warsaw, Poland</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Heart className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Lifelong Learner</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">My Journey</h3>
                <p className="text-slate-600">
                  Every day is an opportunity to learn something new. Whether it's through 
                  formal education, personal projects, or meaningful conversations with 
                  fellow students and mentors, I'm always seeking to expand my horizons.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">My Goals</h3>
                <p className="text-slate-600">
                  I believe in the power of education to transform not just individuals, 
                  but entire communities. My goal is to use my knowledge and skills to 
                  make a positive impact in whatever field I choose to pursue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
