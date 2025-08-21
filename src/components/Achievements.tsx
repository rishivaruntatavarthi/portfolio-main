import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, Code, BookOpen, Star } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      category: "Competitive Programming",
      icon: Code,
      items: [
        {
          title: "GeeksforGeeks Coding Score 1000+",
          description: "Achieved a coding score of 1000+ points using C++ and Java on the GeeksforGeeks platform",
          type: "Achievement"
        },
        {
          title: "Intermediate DSA Certification", 
          description: "Completed intermediate level certification in Data Structures and Algorithms with practical experience",
          type: "Certification"
        }
      ]
    },
    {
      category: "Leadership & Community",
      icon: Users,
      items: [
        {
          title: "GitHub Workshop Organizer",
          description: "Successfully organized and facilitated a GitHub workshop for 50+ junior students",
          type: "Leadership"
        },
        {
          title: "Event Co-Lead - Black Box Community", 
          description: "Served as Co-Lead for events in the Black Box Student Community, coordinating student-driven initiatives",
          type: "Leadership"
        },
        {
          title: "Academic Excellence",
          description: "Secured 1st rank in 5th semester and 2nd rank in 3rd semester among peers",
          type: "Academic"
        }
      ]
    },
    {
      category: "Professional Certifications",
      icon: Award,
      items: [
        {
          title: "Microsoft Azure AI Fundamentals (AI-900)",
          description: "Achieved certification in Microsoft Azure AI fundamentals",
          type: "Certification",
          link: "/certificates/azureai.pdf"   // ✅ Azure AI
        },
        {
          title: "Fortinet Cybersecurity Associate",
          description: "Earned Virtual Internship Certification on Fortinet Certified Associate in Cybersecurity",
          type: "Certification",
          link: "/certificates/cybersecurity.pdf"   // ✅ Cybersecurity
        },
        {
          title: "Cloud Computing & IoT - NPTEL 2024",
          description: "Successfully completed Cloud Computing and Internet of Things certification from NPTEL",
          type: "Certification",
          link: "/certificates/iot-nptel.pdf"   // ✅ IoT NPTEL
        },
        {
          title: "Java Data Structures - Infosys Springboard",
          description: "Completed comprehensive course on Data Structures using Java",
          type: "Certification",
          link: "/certificates/infosys.pdf"   // ✅ Infosys
        }
      ]
    },
    {
      category: "Additional Skills",
      icon: BookOpen,
      items: [
        {
          title: "English Language Proficiency",
          description: "Successfully completed English Strokes and Career Strokes course from British Council",
          type: "Language"
        }
      ]
    }
  ]

  const getIcon = (type: string) => {
    switch(type) {
      case "Achievement": return Trophy
      case "Certification": return Award  
      case "Leadership": return Users
      case "Academic": return Star
      case "Language": return BookOpen
      default: return Award
    }
  }

  const getColor = (type: string) => {
    switch(type) {
      case "Achievement": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
      case "Certification": return "bg-blue-500/10 text-blue-600 border-blue-500/20"
      case "Leadership": return "bg-purple-500/10 text-purple-600 border-purple-500/20" 
      case "Academic": return "bg-green-500/10 text-green-600 border-green-500/20"
      case "Language": return "bg-orange-500/10 text-orange-600 border-orange-500/20"
      default: return "bg-primary/10 text-primary border-primary/20"
    }
  }

  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A record of academic excellence, technical certifications, and leadership contributions 
            that showcase my commitment to continuous learning and community impact.
          </p>
        </div>

        <div className="space-y-12">
          {achievements.map((category, categoryIndex) => (
            <div key={category.category} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => {
                  const IconComponent = getIcon(item.type)
                  return (
                    <Card 
                      key={item.title}
                      className="glass glass-hover border-0"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="font-semibold text-lg leading-tight">{item.title}</h4>
                              
                              {/* ✅ Make badge clickable only if link exists */}
                              {item.link ? (
                                <a 
                                  href={item.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  <Badge className={`text-xs font-medium border ${getColor(item.type)} cursor-pointer hover:scale-105 transition`}>
                                    {item.type}
                                  </Badge>
                                </a>
                              ) : (
                                <Badge className={`text-xs font-medium border ${getColor(item.type)}`}>
                                  {item.type}
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">GeeksforGeeks Score</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <p className="text-muted-foreground">Major Projects</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <p className="text-muted-foreground">Certifications</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">9.16</div>
            <p className="text-muted-foreground">CGPA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
