// Typed events/news data for rendering across pages
export interface Event {
  id: string;
  title: string;
  date: string;
  category: "event" | "news" | "achievement";
  summary: string;
  location?: string;
}

export const events: Event[] = [
  {
    id: "tech-fest-2026",
    title: "Annual TechFest 2026 - Innovation Showcase",
    date: "2026-03-15",
    category: "event",
    summary: "Three-day technology festival featuring student projects, industry speakers, hackathons, and robotics competitions.",
    location: "Main Campus Auditorium",
  },
  {
    id: "placement-record",
    title: "Record Placement Season with 95% Success Rate",
    date: "2026-02-10",
    category: "achievement",
    summary: "Our students secured positions at leading tech companies with average packages exceeding industry standards.",
  },
  {
    id: "research-grant",
    title: "Faculty Receives National Research Grant",
    date: "2026-02-05",
    category: "news",
    summary: "Dr. Sarah Chen awarded $500K grant for groundbreaking work in renewable energy systems and smart grid technology.",
  },
  {
    id: "industry-workshop",
    title: "Industry Workshop on AI & Machine Learning",
    date: "2026-03-20",
    category: "event",
    summary: "Hands-on workshop conducted by industry experts covering latest trends in artificial intelligence and practical applications.",
    location: "Computer Science Block",
  },
  {
    id: "sports-victory",
    title: "Students Win State-Level Sports Championship",
    date: "2026-01-28",
    category: "achievement",
    summary: "Our athletics team brought home gold medals in multiple categories at the state-level inter-collegiate sports meet.",
  },
  {
    id: "cultural-fest",
    title: "Spring Cultural Festival 2026",
    date: "2026-04-10",
    category: "event",
    summary: "Celebrate diversity and creativity with music, dance, drama, and art exhibitions from students across all departments.",
    location: "Open Air Theatre",
  },
];
