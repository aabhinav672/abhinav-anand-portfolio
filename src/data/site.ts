import { assetUrl } from "../lib/assetUrl";

export const siteConfig = {
  name: "Abhinav Anand",
  role: "QA Automation Engineer",
  tagline:
    "QA Automation Engineer with 3+ years of experience specializing in Playwright, TypeScript, and API testing across Healthcare and Insurance platforms — modernizing QA workflows with AI and MCP to cut testing cycles and ship reliable, scalable automation suites.",
  photoUrl: assetUrl("profile.jpg"),
  email: "aabhinav672@gmail.com",
  phone: "+91-8409494102",
  location: "New Town, Kolkata, India",
  navLinks: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Gallery", to: "/gallery" },
    { label: "Achievements", to: "/achievements" },
    { label: "Contact", to: "/contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhinav-anand95a9b11b6/",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:aabhinav672@gmail.com", icon: "mail" },
  ],
} as const;
