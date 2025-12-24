import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  learnings: string;
}

const projects: Project[] = [
  {
    title: "Class 12 Final Project",
    description:
      "My first complete programming project, built during Class 12. This project taught me the importance of planning, debugging, and actually finishing what you start.",
    techStack: ["Python", "File Handling", "Basic GUI"],
    githubUrl: "https://github.com/coolchamp26",
    learnings: "Learned project structuring, debugging skills, and the satisfaction of completing something from scratch.",
  },
  {
    title: "DSA Practice Repository",
    description:
      "A collection of solved problems from various platforms, organized by topic and difficulty. Focused on building strong algorithmic thinking.",
    techStack: ["C++", "Python", "Algorithms"],
    githubUrl: "https://github.com/coolchamp26",
    learnings: "Strengthened problem-solving patterns and learned to approach problems systematically.",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This website you're looking at! Built to showcase my work and practice modern web development techniques.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/coolchamp26",
    learnings: "Hands-on experience with React components, responsive design, and deployment.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Projects
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group bg-card border border-border rounded-xl p-6 md:p-8 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Folder className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-1"
                            aria-label="View on GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-1"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Learnings */}
                    <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-secondary-foreground">
                        <span className="font-medium text-foreground">What I learned:</span>{" "}
                        {project.learnings}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-primary/5 text-primary rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/coolchamp26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                See More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;