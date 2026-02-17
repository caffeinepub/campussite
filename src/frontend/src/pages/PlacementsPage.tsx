import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building2, Users, Award } from "lucide-react";

// Placements page with stats, recruiters, and student outcomes
export default function PlacementsPage() {
  const stats = [
    { label: "Placement Rate", value: "95%", icon: TrendingUp },
    { label: "Average Package", value: "$85K", icon: Award },
    { label: "Highest Package", value: "$150K", icon: TrendingUp },
    { label: "Recruiting Companies", value: "200+", icon: Building2 },
  ];

  const topRecruiters = [
    "Google", "Microsoft", "Amazon", "Apple", "Meta",
    "Tesla", "IBM", "Oracle", "Cisco", "Intel",
    "Adobe", "Salesforce", "Netflix", "Uber", "Airbnb",
  ];

  const outcomes = [
    {
      icon: Building2,
      title: "Industry Partnerships",
      description: "Strong relationships with leading companies ensure regular campus recruitment drives and internship opportunities.",
    },
    {
      icon: Users,
      title: "Career Guidance",
      description: "Dedicated placement cell provides resume building, interview preparation, and career counseling services.",
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Regular workshops, training sessions, and certification programs to enhance employability skills.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Placements</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Our strong industry connections and comprehensive training ensure exceptional career opportunities for our graduates.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Placement Statistics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself with consistently high placement rates and competitive packages.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center">
                <CardHeader>
                  <stat.icon className="h-10 w-10 mx-auto text-primary mb-4" />
                  <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Top Recruiters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading global companies trust our graduates and regularly recruit from our campus.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {topRecruiters.map((company, idx) => (
              <Badge key={idx} variant="secondary" className="text-base px-4 py-2">
                {company}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Placement Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support system to ensure every student achieves their career goals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map((outcome, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <outcome.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{outcome.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our alumni about their journey from campus to career.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                <p className="text-sm text-muted-foreground">Software Engineer at Google</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "The placement cell's guidance and the technical training I received prepared me perfectly for my dream job at Google."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Michael Chen</CardTitle>
                <p className="text-sm text-muted-foreground">Data Scientist at Microsoft</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "The industry exposure through internships and projects gave me a competitive edge in the job market."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Priya Patel</CardTitle>
                <p className="text-sm text-muted-foreground">Product Manager at Amazon</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "The holistic development approach and mentorship helped me transition from engineering to product management."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
