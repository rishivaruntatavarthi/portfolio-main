import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, Lock, Hand, Building, FileText, Trophy, Globe } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Federated Learning with Homomorphic Encryption",
      description: "Implemented a secure federated learning system using homomorphic encryption techniques.",
      icon: Lock,
      technologies: ["Python", "Machine Learning", "Cryptography", "Federated Learning"],
      details: "Developed a privacy-preserving machine learning system that allows multiple parties to collaboratively train models without sharing raw data. Implemented homomorphic encryption to ensure data privacy while maintaining model accuracy.",
      features: ["Privacy-preserving ML", "Distributed training", "Encryption protocols", "Model aggregation"]
    },
    {
      title: "Gesture-based Virtual Keyboard",
      description: "Built a real-time hand gesture recognition system for virtual keyboard input using computer vision.",
      icon: Hand,
      technologies: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
      details: "Created an innovative input method that translates hand gestures into keyboard commands. The system uses computer vision and machine learning to recognize hand movements and convert them to text input in real-time.",
      features: ["Real-time gesture recognition", "3+ language support", "Google/YouTube/Instagram integration", "Machine learning models"]
    },
    {
      title: "Student Management System",
      description: "Developed a comprehensive Java application for managing student records with full CRUD functionality.",
      icon: Building,
      technologies: ["Java", "SQL", "JDBC", "OOP"],
      details: "Built a robust student management system using object-oriented programming principles. The application provides complete student lifecycle management with efficient database operations and a clean user interface.",
      features: ["CRUD operations", "Database integration", "Student records management", "Efficient data handling"]
    },
    {
      title: "NLP Legal Document Translation",
      description: "Created an AI-powered application to translate complex legal documents into regional Indian languages.",
      icon: FileText,
      technologies: ["NLP", "Python", "Translation APIs", "Text Processing"],
      details: "Developed a sophisticated natural language processing application that simplifies and translates legal documents into Telugu, Hindi, and Tamil. The system helps make legal information more accessible to regional language speakers.",
      features: ["Multi-language support", "Legal document processing", "NLP algorithms", "Regional language translation"]
    },
    {
      title: "Sports Booking System",
      description: "Built a full-stack web application for sports facility booking with Spring Boot and MySQL.",
      icon: Trophy,
      technologies: ["Spring Boot", "MySQL", "RESTful APIs", "Full-stack"],
      details: "Designed and implemented a comprehensive sports facility booking system with secure booking management, payment processing, and user management. The system handles concurrent bookings and provides real-time availability updates.",
      features: ["Booking management", "Payment integration", "Real-time updates", "User authentication"]
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a responsive personal portfolio website showcasing projects and skills.",
      icon: Globe,
      technologies: ["React", "JavaScript", "Responsive Design", "Modern UI"],
      details: "Created a modern, responsive portfolio website using React and JavaScript. The site features smooth animations, responsive design, and showcases personal projects and achievements with a focus on user experience.",
      features: ["Responsive design", "Modern UI/UX", "Project showcase", "Skills presentation"]
    }
  ]

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects spanning machine learning, web development, 
            and innovative solutions that demonstrate my programming skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass glass-hover border-0 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs font-medium bg-primary/10 text-primary border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full mt-4 glass hover:bg-primary hover:text-white transition-all"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass border-0 max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-3">
                        <project.icon className="w-6 h-6 text-primary" />
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.details}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="bg-primary/10 text-primary border-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}