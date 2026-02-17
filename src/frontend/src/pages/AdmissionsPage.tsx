import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";

// Admissions page with eligibility, process, dates, and FAQs
export default function AdmissionsPage() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application form with all required documents and information.",
    },
    {
      icon: Users,
      title: "Entrance Examination",
      description: "Appear for our entrance test or submit valid scores from national-level examinations.",
    },
    {
      icon: CheckCircle,
      title: "Interview & Selection",
      description: "Shortlisted candidates will be called for personal interview and final selection.",
    },
    {
      icon: Calendar,
      title: "Enrollment",
      description: "Complete the enrollment process by submitting documents and paying the fees.",
    },
  ];

  const faqs = [
    {
      question: "What are the eligibility criteria for undergraduate programs?",
      answer: "Candidates must have completed 12th grade with a minimum of 60% marks in relevant subjects (Physics, Chemistry, Mathematics for engineering programs). Valid scores from national entrance exams are also required.",
    },
    {
      question: "When does the admission process start?",
      answer: "The admission process typically begins in March each year. Applications are accepted online through our official website. Important dates are announced on our admissions portal.",
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, we offer merit-based scholarships, need-based financial aid, and special scholarships for outstanding achievements in academics, sports, or extracurricular activities. Details are available on our scholarships page.",
    },
    {
      question: "Can I apply for multiple programs?",
      answer: "Yes, you can apply for up to three programs in order of preference. However, a separate application fee is required for each program.",
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents include: academic transcripts, entrance exam scores, identity proof, passport-size photographs, caste certificate (if applicable), and migration certificate. A complete checklist is provided after application submission.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Begin your journey towards excellence. Learn about our admission process, eligibility criteria, and important dates.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to secure your place at Pinnacle Institute.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <Card key={idx} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Important Dates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar with these key admission milestones.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium">Application Opens</span>
                    <span className="text-muted-foreground">March 1, 2026</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium">Application Deadline</span>
                    <span className="text-muted-foreground">May 31, 2026</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium">Entrance Examination</span>
                    <span className="text-muted-foreground">June 15-20, 2026</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium">Results Announcement</span>
                    <span className="text-muted-foreground">July 5, 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Classes Begin</span>
                    <span className="text-muted-foreground">August 1, 2026</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our admission process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Ready to Apply?</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
              <Button size="lg">Start Your Application</Button>
              <Button size="lg" variant="outline" onClick={() => window.location.hash = "/contact"}>
                Contact Admissions
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
