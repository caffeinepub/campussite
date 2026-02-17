import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import DepartmentsGrid from "@/components/sections/DepartmentsGrid";
import EventsList from "@/components/sections/EventsList";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

// Responsive home page with hero, highlights, departments preview, and events sections
export default function HomePage() {
  const stats = [
    { icon: GraduationCap, label: "Students Enrolled", value: "5,000+" },
    { icon: Users, label: "Expert Faculty", value: "250+" },
    { icon: Award, label: "Placement Rate", value: "95%" },
    { icon: BookOpen, label: "Programs Offered", value: "15+" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Excellence in Education, Innovation in Practice
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Join a community of learners, innovators, and leaders. At Pinnacle Institute, we prepare you for the challenges of tomorrow with world-class education and hands-on experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => window.location.hash = "/admissions"}>
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.hash = "/about"}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/hero-banner.dim_1600x600.png" 
                alt="Campus Life"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of undergraduate and postgraduate programs designed to shape future leaders.
            </p>
          </div>
          <DepartmentsGrid limit={3} />
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" onClick={() => window.location.hash = "/academics"}>
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest News & Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest happenings, achievements, and upcoming events at our campus.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <EventsList limit={3} />
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" onClick={() => window.location.hash = "/news-events"}>
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Ready to Start Your Journey?</CardTitle>
              <CardDescription className="text-base">
                Take the first step towards a bright future. Apply now and join our community of excellence.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
              <Button size="lg" onClick={() => window.location.hash = "/admissions"}>
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.hash = "/contact"}>
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
