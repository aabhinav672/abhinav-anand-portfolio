import { Link } from "react-router-dom";
import { siteConfig } from "../data/site";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="text-base font-semibold text-slate-900">
            {siteConfig.name}
          </Link>
          <p className="mt-1 text-sm text-slate-500">{siteConfig.role}</p>
        </div>

        <div className="flex items-center gap-4">
          {siteConfig.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "mail" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-brand-300 hover:text-brand-600"
            >
              <Icon name={social.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200">
        <p className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-slate-400 sm:text-left">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
