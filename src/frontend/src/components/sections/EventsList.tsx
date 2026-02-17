import { events, type Event } from "@/content/events";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface EventsListProps {
  limit?: number;
  category?: Event["category"];
}

// Reusable events/news list component rendering from typed data
export default function EventsList({ limit, category }: EventsListProps) {
  let displayEvents = category 
    ? events.filter(e => e.category === category)
    : events;
  
  if (limit) {
    displayEvents = displayEvents.slice(0, limit);
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (cat: Event["category"]) => {
    switch (cat) {
      case "event": return "default";
      case "news": return "secondary";
      case "achievement": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="space-y-4">
      {displayEvents.map((event: Event) => (
        <Card key={event.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between gap-2 mb-2">
              <CardTitle className="text-lg">{event.title}</CardTitle>
              <Badge variant={getCategoryColor(event.category)} className="shrink-0 capitalize">
                {event.category}
              </Badge>
            </div>
            <CardDescription className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                {formatDate(event.date)}
              </span>
              {event.location && (
                <span className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{event.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
