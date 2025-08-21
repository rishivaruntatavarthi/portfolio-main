import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Settings, Brain, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "C++", "SQL"],
      color: "text-blue-500"
    },
    {
      title: "Web Development", 
      icon: Globe,
      skills: ["HTML", "CSS", "React", "Spring Boot", "RESTful APIs"],
      color: "text-green-500"
    },
    {
      title: "Databases",
      icon: Database, 
      skills: ["MySQL", "JDBC", "Database Design", "Query Optimization"],
      color: "text-purple-500"
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: ["NumPy", "Pandas", "Matplotlib", "Machine Learning", "CNN", "RNN"],
      color: "text-orange-500"
    },
    {
      title: "Development Tools",
      icon: Settings,
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      color: "text-red-500"
    },
    {
      title: "Core Concepts",
      icon: Wrench,
      skills: ["Data Structures", "Algorithms", "OOP", "Software Engineering"],
      color: "text-cyan-500"
    }
  ]

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and programming languages I've mastered 
            through academic projects and hands-on development experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass glass-hover border-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Technical Strengths</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Problem Solving:</strong> Strong analytical skills with experience in competitive programming
              and algorithm implementation. <br />
              <strong>Full-Stack Development:</strong> Capable of building end-to-end applications from database 
              design to user interface implementation. <br />
              <strong>Machine Learning:</strong> Hands-on experience with ML algorithms including regression, 
              decision trees, and neural networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}