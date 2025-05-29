
import { BookOpen, Users, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Committed to maintaining high academic standards and continuous learning across various subjects.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills, fostering positive relationships with peers.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Cultural Awareness",
      description: "Living in Warsaw has enhanced my global perspective and appreciation for diverse cultures.",
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always looking for creative solutions and new approaches to challenges and opportunities.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Strengths
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These are the key areas where I focus my energy and continue to develop my capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {skill.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
