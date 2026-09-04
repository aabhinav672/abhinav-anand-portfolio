export interface Achievement {
  title: string;
  description: string;
  gradient: string;
}

export const achievements: Achievement[] = [
  {
    title: "AI-Driven Efficiency",
    description:
      "Accelerated test scenario design by 50% by integrating MCP (Model Context Protocol) and GitHub Copilot into Playwright automation workflows.",
    gradient: "from-brand-500 to-indigo-600",
  },
  {
    title: "Quality Excellence",
    description:
      "Consistently delivered zero-defect releases for high-compliance Insurance and Healthcare platforms through rigorous E2E and API validation.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Technical Leadership",
    description:
      "Mentored teams on standardized QA processes and spearheaded the successful migration of legacy applications to modern, cloud-ready web architectures.",
    gradient: "from-violet-500 to-purple-600",
  },
];
