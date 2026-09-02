import * as React from "react";
import { ArchitectureLayer } from "@/types/case-study";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

interface ArchitectureFlowProps {
  layers: ArchitectureLayer[];
}

export function ArchitectureFlow({ layers }: ArchitectureFlowProps) {
  return (
    <div className="space-y-3 pt-2" aria-label="Diagram Alur Arsitektur Sistem">
      <div className="grid grid-cols-1 gap-3">
        {layers.map((layer, index) => (
          <React.Fragment key={layer.name}>
            <Card className="p-4 bg-card border-border shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground font-semibold">
                      0{index + 1}.
                    </span>
                    <span className="font-semibold text-sm text-foreground">
                      {layer.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {layer.description}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  size="sm"
                  className="font-mono text-[11px] self-start sm:self-center shrink-0 bg-muted/40"
                >
                  {layer.tech}
                </Badge>
              </div>
            </Card>

            {index < layers.length - 1 && (
              <div className="flex justify-center py-0.5 text-muted-foreground/60">
                <ArrowDown className="h-4 w-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
