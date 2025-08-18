"use client";
import { CommonCard, CardGrid } from "@/components/common/CardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Code, Camera, Users } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Virtual Salesman",
      description:
        "Interactive virtual salesman application built during college final year project using pure HTML, CSS, and JavaScript. Features dynamic customer interaction and product presentation.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      icon: <Users className="h-5 w-5" />,
      category: "Web Application",
      highlights: [
        "Pure vanilla JavaScript implementation",
        "Interactive user interface",
        "Product showcase system",
        "Responsive design for all devices",
      ],
    },
    {
      title: "Attendance System",
      description:
        "Automated attendance tracking system using computer vision. Built with Python, OpenCV, and Tkinter to recognize faces and mark attendance automatically with an intuitive GUI interface.",
      technologies: ["Python", "OpenCV", "Tkinter", "Computer Vision"],
      icon: <Camera className="h-5 w-5" />,
      category: "Machine Learning",
      highlights: [
        "Face recognition technology",
        "Real-time attendance marking",
        "Tkinter GUI interface",
        "Database integration for records",
      ],
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects I've worked on during my academic journey
              and professional development.
            </p>
          </div>

          {/* Projects Grid */}
          <CardGrid className="lg:grid-cols-2">
            {projects.map((project, index) => (
              <CommonCard
                key={index}
                title={project.title}
                badge={project.category}
                description={
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                }
                content={
                  <div className="space-y-6">
                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
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

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Code className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </div>
                }
              />
            ))}
          </CardGrid>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              More projects are in development. Stay tuned for updates!
            </p>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://github.com/Nirav1110", "_blank")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
