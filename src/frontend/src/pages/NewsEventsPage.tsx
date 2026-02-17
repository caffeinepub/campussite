import EventsList from "@/components/sections/EventsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// News and events page with categorized listings
export default function NewsEventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">News & Events</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Stay connected with the latest happenings, achievements, and upcoming events at Pinnacle Institute.
          </p>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <div className="max-w-4xl mx-auto">
              <TabsContent value="all">
                <EventsList />
              </TabsContent>
              
              <TabsContent value="events">
                <EventsList category="event" />
              </TabsContent>
              
              <TabsContent value="news">
                <EventsList category="news" />
              </TabsContent>
              
              <TabsContent value="achievements">
                <EventsList category="achievement" />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
