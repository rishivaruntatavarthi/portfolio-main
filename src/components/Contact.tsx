import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Code, FileText } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tatavarthirishi@gmail.com",
      href: "mailto:tatavarthirishi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 9347740140",
      href: "tel:+919347740140"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tadepalligudem, India",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rishivaruntatavarthi",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin, 
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tatavarthi-rishi-varun/",
      color: "hover:text-blue-600"
    },
    {
      icon: Code,
      label: "LeetCode", 
      href: "https://leetcode.com/u/Rishivarun/",
      color: "hover:text-orange-500"
    },
    {
      icon: FileText,
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/tatavarthirishi/",
      color: "hover:text-green-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/_rishi_7_/",
      color: "hover:text-pink-500"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology and innovation. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => (
              <Card key={info.label} className="glass glass-hover border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                  {info.href === "#" ? (
                    <p className="text-muted-foreground">{info.value}</p>
                  ) : (
                    <a 
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="glass p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold mb-6">Find me on</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  className={`glass glass-hover group ${social.color} transition-all duration-300`}
                  onClick={() => window.open(social.href, "_blank")}
                >
                  <social.icon className="w-5 h-5 mr-2" />
                  {social.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're looking for a passionate developer to join your team, have an 
                exciting project in mind, or just want to connect with a fellow tech enthusiast, 
                I'd love to hear from you.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("mailto:tatavarthirishi@gmail.com", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send me an email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}