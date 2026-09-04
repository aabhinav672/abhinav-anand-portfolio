import PageHero from "../components/PageHero";
import { skillGroups, experience } from "../data/skills";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="A little about who I am and how I work"
        description="I'm a QA Automation Engineer who specializes in Playwright, TypeScript, and API testing across Healthcare and Insurance platforms."
      />

      <section className="section grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-slate-900">My background</h2>
          <div className="mt-4 space-y-4 text-slate-600">
            <p>
              I&apos;m a QA Automation Engineer with 3+ years of experience building end-to-end
              and API test automation for Healthcare and Insurance platforms, using Playwright,
              TypeScript, Cucumber, and Karate. I&apos;m especially focused on modernizing QA
              workflows with AI — integrating MCP (Model Context Protocol) and GitHub Copilot
              into automation pipelines to cut test design time and speed up release cycles.
            </p>
            <p>
              I care about building automation suites that are scalable, well-reported, and
              directly tied to product stability — not brittle scripts that break the moment
              something changes. That&apos;s meant engineering frameworks from the ground up,
              owning the full defect lifecycle, and driving measurable improvements in regression
              cycle time and release velocity for high-compliance, fast-paced Agile teams.
            </p>
          </div>

          <h2 className="mt-12 text-xl font-semibold text-slate-900">Experience &amp; education</h2>
          <ol className="mt-6 space-y-8 border-l border-slate-200 pl-6">
            {experience.map((item) => (
              <li key={item.role} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-500" />
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {item.period}
                  </p>
                  <span className="tag">{item.type === "work" ? "Work" : "Education"}</span>
                </div>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{item.role}</h3>
                <p className="text-sm text-slate-500">{item.organization}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside>
          <h2 className="text-xl font-semibold text-slate-900">Skills &amp; tools</h2>
          <div className="mt-6 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-slate-900">{group.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
