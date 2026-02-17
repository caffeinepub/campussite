import { siteConfig } from "@/siteConfig";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Contact page with details from config and inquiry form (non-submitting)
export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Get in touch with us for admissions, inquiries, or any other information. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
                        {siteConfig.address.country}
                      </p>
                      <a 
                        href={siteConfig.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary">
                          {siteConfig.contact.phone}
                        </a>
                        <br />
                        <a href={`tel:${siteConfig.contact.alternatePhone}`} className="hover:text-primary">
                          {siteConfig.contact.alternatePhone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">
                        General: <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">
                          {siteConfig.contact.email}
                        </a>
                        <br />
                        Admissions: <a href={`mailto:${siteConfig.contact.admissionsEmail}`} className="hover:text-primary">
                          {siteConfig.contact.admissionsEmail}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={5}
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
