import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function About() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Sri Vasavi Engineering College, Tadepalligudem",
      period: "2022-2026",
      gpa: "9.16 CGPA"
    },
    {
      degree: "Board of Intermediate Education", 
      institution: "Narayana Junior College, Bhimavaram",
      period: "2020-2022",
      gpa: "953 Marks"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Narayana English Medium School, Palakol", 
      period: "2019-2020",
      gpa: "10 GPA"
    }
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student with a strong foundation in software development 
            and a keen interest in emerging technologies. My journey spans from competitive programming 
            to full-stack development and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl glass-hover">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a Computer Science student at Sri Vasavi Engineering College, I've developed strong 
                analytical and problem-solving skills. I'm passionate about learning new technologies 
                and applying them to create meaningful solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans multiple programming languages including Java, Python, and JavaScript, 
                with hands-on experience in full-stack development, data structures, algorithms, and 
                machine learning implementations.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl glass-hover">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Highlights
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Achieved 1000+ coding score on GeeksforGeeks platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Organized GitHub workshop for 50+ junior students</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Event Co-Lead at Black Box Student Community</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Multiple certifications in AI, cybersecurity, and cloud computing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="glass glass-hover border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg leading-tight">{edu.degree}</h4>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {edu.gpa}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}