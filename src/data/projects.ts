import { assetUrl } from "../lib/assetUrl";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  /** Optional photo — place the file in public/projects/ and reference it via assetUrl(). Falls back to the gradient when the file is missing. */
  image?: string;
}

export const projects: Project[] = [
  {
    title: "AI-Driven QA Scenario Automation",
    description:
      "Integrated MCP (Model Context Protocol) and GitHub Copilot into the QA workflow to auto-generate test scenarios, cutting test design time by 50% and increasing sprint velocity.",
    tags: ["MCP", "GitHub Copilot", "Playwright", "TypeScript"],
    gradient: "from-brand-500 to-indigo-600",
    image: assetUrl("projects/ai-qa-scenario-automation.jpg"),
  },
  {
    title: "Insurance Platform E2E & API Test Suite",
    description:
      "Designed and executed end-to-end test scenarios and API validation suites for a financial/insurance platform, validating complex data flows across distributed systems.",
    tags: ["Playwright", "TypeScript", "Karate DSL", "Postman"],
    gradient: "from-sky-500 to-brand-600",
    image: assetUrl("projects/insurance-platform-e2e.jpg"),
  },
  {
    title: "Healthcare Automation Framework",
    description:
      "Engineered a scalable automation framework from the ground up for a healthcare platform, achieving a 30% reduction in regression cycle time and accelerating release velocity.",
    tags: ["Playwright", "C#", "Cucumber (BDD)"],
    gradient: "from-violet-500 to-brand-600",
    image: assetUrl("projects/healthcare-automation-framework.jpg"),
  },
  {
    title: "Cucumber HTML Reporting Pipeline",
    description:
      "Implemented real-time Cucumber HTML reporting integrated into the test workflow, giving stakeholders transparent, up-to-date insight into test health and execution results.",
    tags: ["Cucumber", "CI/CD", "GitHub Actions"],
    gradient: "from-emerald-500 to-teal-600",
    image: assetUrl("projects/cucumber-html-reporting.jpg"),
  },
  {
    title: "Defect Lifecycle & Release Governance",
    description:
      "Orchestrated the full defect lifecycle in Rally, partnering with stakeholders to prioritize fixes and maintain zero-defect releases on high-compliance Insurance and Healthcare platforms.",
    tags: ["Rally (ALM)", "Agile/Scrum", "Defect Management"],
    gradient: "from-amber-500 to-orange-600",
    image: assetUrl("projects/defect-lifecycle-governance.jpg"),
  },
  {
    title: "End-to-End QA Automation Suite",
    description:
      "Automated an existing application end-to-end during an intensive full-stack QA program, delivering a functional test suite with integrated automated report generation.",
    tags: ["JavaScript", "TypeScript", "Playwright", "HTML5/CSS3"],
    gradient: "from-rose-500 to-pink-600",
    image: assetUrl("projects/e2e-qa-automation-suite.jpg"),
  },
];
