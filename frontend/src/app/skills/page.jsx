import { CommonCard, CardGrid } from "@/components/common/CardLayout";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Server, Wrench } from "lucide-react";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: <Code2 className="h-5 w-5" />,
      skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Languages & Markup",
      icon: <Palette className="h-5 w-5" />,
      skills: ["JavaScript", "HTML5", "CSS3", "Python (Basic)"],
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      title: "Styling & Design",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Tailwind CSS", "Responsive Design", "CSS Grid", "Flexbox"],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      title: "Tools & Others",
      icon: <Server className="h-5 w-5" />,
      skills: ["Git", "Webpack", "Vite", "VS Code"],
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I use to
              build modern web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <CardGrid className="lg:grid-cols-4">
            {skillCategories.map((category, index) => (
              <CommonCard
                key={index}
                title={category.title}
                description={
                  <div
                    className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center mb-3`}
                  >
                    {category.icon}
                  </div>
                }
                content={
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                }
              />
            ))}
          </CardGrid>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Always eager to learn new technologies and expand my skill set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
