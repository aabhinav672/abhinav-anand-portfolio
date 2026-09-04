export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: ["TypeScript", "Playwright", "Cucumber (BDD)", "Karate DSL", "C#"],
  },
  {
    category: "API Testing & Tooling",
    items: ["Postman", "IntelliJ IDEA", "Manual API Testing"],
  },
  {
    category: "Web Automation & IDEs",
    items: ["VS Code", "Cross-browser Testing"],
  },
  {
    category: "Build & CI/CD",
    items: ["GitHub Actions"],
  },
  {
    category: "Version Control & Management",
    items: ["Git", "GitHub", "Rally (ALM)"],
  },
  {
    category: "Testing Practices",
    items: ["Regression", "Smoke", "E2E", "Functional", "UAT", "Agile/Scrum"],
  },
  {
    category: "Database & Reporting",
    items: ["SQL", "Cucumber HTML Reports"],
  },
];

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const experience: ExperienceItem[] = [
  {
    role: "Associate / QA Automation Engineer (Financial/Insurance)",
    organization: "Cognizant Technology Solutions (CTS)",
    period: "Sep 2024 — Present",
    description:
      "Leveraging MCP (Model Context Protocol) and GitHub Copilot to automate test scenario design, cutting design time by 50% and increasing sprint velocity. Designing E2E test scenarios and API validation suites with Playwright, TypeScript, and Karate, and orchestrating the full defect lifecycle in Rally.",
    type: "work",
  },
  {
    role: "QA Automation Engineer (Healthcare Project)",
    organization: "Cognizant Technology Solutions (CTS)",
    period: "Sep 2023 — Sep 2024",
    description:
      "Engineered a scalable automation framework from the ground up using Playwright, C#, and Cucumber (BDD), achieving a 30% reduction in regression cycle time. Implemented Cucumber HTML reporting for real-time visibility into test health and execution results.",
    type: "work",
  },
  {
    role: "Full Stack QA Intern",
    organization: "Cognizant Technology Solutions (CTS)",
    period: "Jan 2023 — Aug 2023",
    description:
      "Completed an intensive fast-track program in HTML5, CSS3, JavaScript, TypeScript, and Playwright, then automated an existing application end-to-end with integrated automated report generation.",
    type: "work",
  },
  {
    role: "Bachelor of Technology (B.Tech.)",
    organization: "Computer Science & Engineering (CSE)",
    period: "2019 — 2023",
    description: "Grade: 7.23 CGPA.",
    type: "education",
  },
];
