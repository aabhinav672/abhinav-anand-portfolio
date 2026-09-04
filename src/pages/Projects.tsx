import PageHero from "../components/PageHero";
import ProjectThumb from "../components/ProjectThumb";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Automation projects"
        description="Case studies from my work as a QA Automation Engineer — building test frameworks, API validation suites, and AI-assisted QA workflows for Healthcare and Insurance platforms. These are confidential client engagements, so no public repos are linked."
      />

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card flex flex-col overflow-hidden">
              <ProjectThumb
                image={project.image}
                gradient={project.gradient}
                title={project.title}
                className="h-36 w-full"
              />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold text-slate-900">{project.title}</h2>
                <p className="mt-2 flex-1 text-sm text-slate-500">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
