import { siteConfig } from "@/siteConfig";
import { Separator } from "@/components/ui/separator";
import { SiFacebook, SiX, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

// Site footer with consistent branding, contact details from config, and quick links
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'pinnacle-its';

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <img 
              src="/assets/generated/campus-wordmark.dim_512x160.png" 
              alt={siteConfig.name}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiX className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#/academics" className="text-muted-foreground hover:text-primary transition-colors">Academics</a></li>
              <li><a href="/#/admissions" className="text-muted-foreground hover:text-primary transition-colors">Admissions</a></li>
              <li><a href="/#/placements" className="text-muted-foreground hover:text-primary transition-colors">Placements</a></li>
              <li><a href="/#/news-events" className="text-muted-foreground hover:text-primary transition-colors">News & Events</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Computer Science</span></li>
              <li><span className="text-muted-foreground">Electronics & Communication</span></li>
              <li><span className="text-muted-foreground">Mechanical Engineering</span></li>
              <li><span className="text-muted-foreground">Civil Engineering</span></li>
              <li><span className="text-muted-foreground">Information Technology</span></li>
              <li><span className="text-muted-foreground">MBA</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{" "}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
