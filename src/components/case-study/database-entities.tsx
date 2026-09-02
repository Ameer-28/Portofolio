import * as React from "react";
import { DatabaseEntity } from "@/types/case-study";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database } from "lucide-react";

interface DatabaseEntitiesProps {
  overview: string;
  entities: DatabaseEntity[];
}

export function DatabaseEntities({ overview, entities }: DatabaseEntitiesProps) {
  return (
    <div className="space-y-4 pt-1">
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {overview}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entities.map((entity) => (
          <Card key={entity.name} className="bg-card border-border shadow-xs">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-1.5 text-foreground">
                <Database className="h-3.5 w-3.5 text-muted-foreground" />
                <CardTitle className="text-sm font-mono font-bold">
                  {entity.name}
                </CardTitle>
              </div>
              <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                {entity.purpose}
              </p>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                Atribut / Kolom Kunci:
              </p>
              <div className="flex flex-wrap gap-1">
                {entity.keyFields.map((field) => (
                  <Badge
                    key={field}
                    variant="secondary"
                    size="sm"
                    className="text-[10px] font-mono bg-muted/60"
                  >
                    {field}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
