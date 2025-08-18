import { CommonCard, CardGrid } from "@/components/common/CardLayout";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const EducationPage = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Engineering",
      institution: "Sarvajanik College of Engineering and Technology",
      duration: "2020 - 2024",
      status: "Completed",
      description:
        "4-year comprehensive program in computer engineering covering software development, algorithms, and system design.",
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      field: "Science Stream",
      institution: "M.M.P High School",
      duration: "2018 - 2020",
      status: "Completed",
      description:
        "Completed higher secondary education with focus on mathematics, physics, and chemistry.",
    },
    {
      degree: "Secondary School Certificate (10th)",
      field: "General Education",
      institution: "Shantiniketan Vidhyavihar",
      duration: "2017 - 2018",
      status: "Completed",
      description:
        "Completed secondary education with strong foundation in core subjects.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Education</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey that laid the foundation for my career in
              technology.
            </p>
          </div>

          {/* Education Timeline */}
          <CardGrid>
            {education.map((edu, index) => (
              <CommonCard
                key={index}
                title={edu.degree}
                badge={edu.status}
                description={
                  <div className="space-y-2">
                    <div className="text-primary font-semibold">
                      {edu.field}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                }
                content={
                  <p className="text-muted-foreground">{edu.description}</p>
                }
              />
            ))}
          </CardGrid>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Continuously learning and expanding my knowledge in technology and
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
