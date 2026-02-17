import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Building, Trophy } from "lucide-react";

// About page with mission/vision/values and campus life overview
export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education, research, and innovation.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold honesty, transparency, and ethical conduct in all our endeavors.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster teamwork, diversity, and inclusive learning environments.",
    },
    {
      icon: Trophy,
      title: "Innovation",
      description: "We encourage creative thinking and pioneering solutions to real-world challenges.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Pinnacle Institute of Technology & Science is a premier educational institution committed to nurturing talent, fostering innovation, and building leaders for tomorrow.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide world-class education that empowers students with knowledge, skills, and values necessary to excel in their chosen fields and contribute meaningfully to society. We are committed to fostering an environment of academic excellence, research innovation, and holistic development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be recognized globally as a leading institution that shapes future leaders, innovators, and entrepreneurs who drive positive change in the world. We envision a community where learning transcends boundaries and every student achieves their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our institutional culture.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Life</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience a vibrant campus culture with state-of-the-art facilities and endless opportunities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Building className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Modern Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our campus features cutting-edge laboratories, smart classrooms, extensive library resources, and comfortable residential facilities designed for optimal learning and living.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Student Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Engage in diverse clubs, cultural events, sports competitions, and technical symposiums. Our vibrant student community ensures there's something for everyone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Sports & Recreation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Stay active with our comprehensive sports facilities including indoor and outdoor courts, gymnasium, swimming pool, and regular inter-collegiate tournaments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
