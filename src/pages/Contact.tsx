import { useState, type FormEvent } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { siteConfig } from "../data/site";

function formatSocialUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const linkedinUrl = siteConfig.socialLinks.find((social) => social.icon === "linkedin")!.href;
  const githubUrl = siteConfig.socialLinks.find((social) => social.icon === "github")!.href;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's work together"
        description="Have a question or a project idea? Send me a message and I'll get back to you soon."
      />

      <section className="section grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-slate-900">Contact information</h2>
          <p className="mt-3 text-sm text-slate-500">
            Prefer email or social? Reach out through any of the channels below.
          </p>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs text-slate-400">Email</dt>
                <dd className="text-sm font-medium text-slate-900">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-600">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs text-slate-400">Phone</dt>
                <dd className="text-sm font-medium text-slate-900">
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-600">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon name="linkedin" className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs text-slate-400">LinkedIn</dt>
                <dd className="text-sm font-medium text-slate-900">
                  <a href={linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-brand-600">
                    {formatSocialUrl(linkedinUrl)}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon name="github" className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs text-slate-400">GitHub</dt>
                <dd className="text-sm font-medium text-slate-900">
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-brand-600">
                    {formatSocialUrl(githubUrl)}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon name="location" className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs text-slate-400">Location</dt>
                <dd className="text-sm font-medium text-slate-900">{siteConfig.location}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-3">
          {status === "sent" ? (
            <div className="card p-8 text-center">
              <h2 className="text-lg font-semibold text-slate-900">Message sent!</h2>
              <p className="mt-2 text-sm text-slate-500">
                Thanks for reaching out — I&apos;ll get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-secondary mt-6"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="input mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="input mt-2"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  className="input mt-2 resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
