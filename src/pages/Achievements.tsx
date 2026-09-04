import PageHero from "../components/PageHero";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <>
      <PageHero
        eyebrow="Highlights"
        title="Achievements"
        description="Milestones from my work as a QA Automation Engineer."
      />

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <article key={achievement.title} className="card flex flex-col p-6">
              <div
                className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${achievement.gradient}`}
              />
              <h2 className="mt-4 text-base font-semibold text-slate-900">{achievement.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{achievement.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
