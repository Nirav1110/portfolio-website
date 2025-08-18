import { CommonCard, CardGrid } from "@/components/common/CardLayout";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const ExperiencePage = () => {
  const experiences = [
    {
      company: "Mirai Minds LLP",
      position: "Frontend Developer",
      duration: "September 2024 - Present",
      type: "Full-time",
      description:
        "Started as a frontend developer intern and transitioned to a full-time role. Working on modern web applications using React, Next.js, and other cutting-edge technologies.",
      highlights: [
        "Successfully completed 6-month internship program",
        "Transitioned to full-time frontend developer role",
        "Developed responsive web applications using React and Next.js",
        "Collaborated with design and backend teams",
        "Implemented modern UI/UX patterns and best practices",
        "Optimized application performance and user experience",
      ],
    },
    {
      company: "Code Unnati Program",
      position: "Technical Trainee",
      duration: "January 2024 - April 2024",
      type: "Training Program",
      description:
        "3-month intensive training program focusing on Python, IoT, and basic machine learning during final semester.",
      highlights: [
        "Completed comprehensive Python programming training",
        "Learned IoT development fundamentals",
        "Introduction to machine learning concepts",
        "Developed hands-on projects and practical applications",
        "Gained experience in problem-solving and technical thinking",
      ],
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in frontend development and technical
              training.
            </p>
          </div>

          {/* Experience Timeline */}
          <CardGrid>
            {experiences.map((exp, index) => (
              <CommonCard
                key={index}
                title={exp.position}
                badge={exp.type}
                description={
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Building className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                }
                content={
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                }
              />
            ))}
          </CardGrid>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Looking forward to new opportunities and challenges in frontend
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
