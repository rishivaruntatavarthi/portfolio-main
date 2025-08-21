import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Code, Database } from "lucide-react"
import profileImage from "@/assets/profile-image.jpg"

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/rishivaruntatavarthi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tatavarthi-rishi-varun/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_rishi_7_/", label: "Instagram" },
  ]

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden glass glass-hover border-4 border-white/20">
                <img 
                  src={profileImage} 
                  alt="Rishi Varun Tatavarthi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse" />
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Rishi Varun Tatavarthi
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <Code className="w-6 h-6 text-primary" />
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              Java Full Stack Developer
            </p>
            <Database className="w-6 h-6 text-primary" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Computer Science student passionate about building innovative solutions with Java, Python, and modern web technologies. 
            Experienced in full-stack development and machine learning.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass glass-hover font-semibold px-8 py-3 rounded-full"
              onClick={() => window.open("https://github.com/rishivaruntatavarthi", "_blank")}
            >
              View My Work
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="glass glass-hover rounded-full w-12 h-12"
                onClick={() => window.open(social.href, "_blank")}
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}