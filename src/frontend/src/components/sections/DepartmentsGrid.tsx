import { departments, type Department } from "@/content/departments";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DepartmentsGridProps {
  limit?: number;
}

// Reusable departments grid component rendering from typed data
export default function DepartmentsGrid({ limit }: DepartmentsGridProps) {
  const displayDepartments = limit ? departments.slice(0, limit) : departments;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {displayDepartments.map((dept: Department) => (
        <Card key={dept.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between gap-2 mb-2">
              <CardTitle className="text-lg">{dept.name}</CardTitle>
              <Badge variant="secondary" className="shrink-0">{dept.level}</Badge>
            </div>
            <CardDescription>{dept.shortDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium mb-2">Key Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {dept.keyAreas.map((area, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Duration: <span className="font-medium text-foreground">{dept.duration}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
