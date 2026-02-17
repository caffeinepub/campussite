import { useState } from "react";
import { siteConfig } from "@/siteConfig";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact", href: "/contact" },
];

// Responsive header with primary navigation and branding using the generated wordmark
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    window.location.hash = href;
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top utility bar */}
      <div className="border-b border-border/40 bg-muted/30">
        <div className="container flex h-10 items-center justify-end gap-4 text-xs">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1 hover:text-primary transition-colors">
            <Phone className="h-3 w-3" />
            <span className="hidden sm:inline">{siteConfig.contact.phone}</span>
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail className="h-3 w-3" />
            <span className="hidden sm:inline">{siteConfig.contact.email}</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}>
          <img 
            src="/assets/generated/campus-wordmark.dim_512x160.png" 
            alt={siteConfig.name}
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className="justify-start text-base"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
