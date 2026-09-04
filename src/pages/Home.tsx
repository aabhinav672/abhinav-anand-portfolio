import { Link } from "react-router-dom";
import { siteConfig } from "../data/site";
import { projects } from "../data/projects";
import Icon from "../components/Icon";
import ProfilePhoto from "../components/ProfilePhoto";

const highlights = [
  { label: "Years of experience", value: "3+" },
  { label: "Faster test design with AI", value: "50%" },
  { label: "Regression cycle reduction", value: "30%" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 py-20 sm:py-28 lg:flex-row lg:justify-between">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              {siteConfig.role}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
              Hi, I&apos;m {siteConfig.name}
            </h1>
            <p className="mt-5 text-base text-slate-500 sm:text-lg">{siteConfig.tagline}</p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link to="/projects" className="btn-primary">
                View my projects
              </Link>
            </div>
          </div>

          <ProfilePhoto className="h-44 w-44 sm:h-56 sm:w-56" />
        </div>

        <div className="border-t border-slate-200">
          <dl className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-6 py-8">
            {highlights.map((item) => (
              <div key={item.label} className="text-center lg:text-left">
                <dt className="text-2xl font-bold text-slate-900 sm:text-3xl">{item.value}</dt>
                <dd className="mt-1 text-xs text-slate-500 sm:text-sm">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-title">Featured projects</h2>
            <p className="section-subtitle">A few things I&apos;ve recently built.</p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            View all projects
            <Icon name="external" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article key={project.title} className="card overflow-hidden">
              <div className={`h-32 w-full bg-gradient-to-br ${project.gradient}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
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

      <section className="border-t border-slate-200 bg-brand-600">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 max-w-lg text-brand-50">
              I&apos;m always open to discussing new opportunities and interesting problems.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-700 shadow-sm transition hover:bg-brand-50"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
