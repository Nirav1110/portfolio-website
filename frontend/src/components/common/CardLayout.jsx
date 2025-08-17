"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CommonCard = ({
  title,
  description,
  content,
  footer,
  badge,
  image,
  className = "",
  variant = "default",
}) => {
  return (
    <Card
      className={`transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {image && (
        <div className="relative">
          {image}
          {badge && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary">{badge}</Badge>
            </div>
          )}
        </div>
      )}

      <CardHeader>
        {title && <CardTitle className="text-lg">{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent>{content}</CardContent>

      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

// Reusable card grid component
export const CardGrid = ({ children, className = "" }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {children}
    </div>
  );
};

// Reusable section component
export const Section = ({ title, subtitle, children, className = "" }) => {
  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
