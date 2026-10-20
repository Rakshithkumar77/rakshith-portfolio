import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Java", level: 75, category: "languages" },
  { name: "JavaScript", level: 75, category: "languages" },
  { name: "SQL", level: 75, category: "languages" },
  { name: "HTML5", level: 75, category: "languages" },
  { name: "CSS3", level: 75, category: "languages" },

  // Backend Development
  { name: "Java", level: 75, category: "backend" },
  { name: "Spring Boot", level: 75, category: "backend" },
  { name: "REST API Development", level: 75, category: "backend" },
  { name: "Maven", level: 75, category: "backend" },

  // Frontend Development
  { name: "React.js", level: 75, category: "frontend" },
  { name: "HTML5", level: 75, category: "frontend" },
  { name: "CSS3", level: 75, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },

  // Databases
  { name: "MySQL", level: 75, category: "databases" },
  { name: "DBMS", level: 75, category: "databases" },
  { name: "SQL", level: 75, category: "databases" },

  // Developer Tools
  { name: "Git", level: 75, category: "tools" },
  { name: "GitHub", level: 75, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "VS Code", level: 75, category: "tools" },
];

const categories = [
  "all",
  "languages",
  "backend",
  "frontend",
  "databases",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills.filter(
          (skill, index, allSkills) =>
            allSkills.findIndex((item) => item.name === skill.name) === index
        )
      : skills.filter((skill) => skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
