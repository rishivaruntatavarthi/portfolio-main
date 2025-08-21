import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Rishi Varun Tatavarthi
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Rishi Varun Tatavarthi. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="https://github.com/rishivaruntatavarthi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/tatavarthi-rishi-varun/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:tatavarthirishi@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}