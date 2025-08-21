import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass backdrop-blur-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Logo */}
        <div className="text-2xl font-bold text-gradient">
          Rishi Varun
        </div>
        
        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Button>
          ))}
        </div>
        
        {/* Right Side: Resume + Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Resume Download Button */}
          <a href="/resume.pdf" download>
            <Button className="bg-purple-500 text-white hover:bg-purple-600">
              Download Resume
            </Button>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
