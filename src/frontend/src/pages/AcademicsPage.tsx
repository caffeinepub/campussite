import DepartmentsGrid from "@/components/sections/DepartmentsGrid";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Microscope, Globe } from "lucide-react";

// Academics page listing all departments and academic highlights
export default function AcademicsPage() {
  const highlights = [
    {
      icon: BookOpen,
      title: "Industry-Aligned Curriculum",
      description: "Our programs are designed in consultation with industry experts to ensure graduates are job-ready.",
    },
    {
      icon: Award,
      title: "Accredited Programs",
      description: "All our programs are accredited by national and international bodies ensuring quality education.",
    },
    {
      icon: Microscope,
      title: "Research Opportunities",
      description: "Students engage in cutting-edge research projects with faculty mentorship and industry collaboration.",
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "International exchange programs, internships, and collaborations with universities worldwide.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover our comprehensive range of programs designed to prepare you for success in your chosen field with a perfect blend of theory and practical experience.
          </p>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets our academic programs apart and prepares our students for global success.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, idx) => (
              <Card key={idx} className="text-center">
                <CardHeader>
                  <highlight.icon className="h-10 w-10 mx-auto text-primary mb-4" />
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Departments */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse range of undergraduate and postgraduate programs.
            </p>
          </div>
          <DepartmentsGrid />
        </div>
      </section>
    </div>
  );
}
