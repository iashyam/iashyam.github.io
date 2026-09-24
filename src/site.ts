// Static site identity. Kept in one place because several components need the
// same email and blog URL; content.yml holds products, projects and skills.
export const site = {
  name: "Shyam Sunder",
  role: "Machine Learning Engineer",
  company: "McDermott",
  email: "hello@example.com", // TODO placeholder
  githubUsername: "iashyam",
  blogUrl: "https://blog.example.com", // TODO placeholder
  socials: [
    // TODO placeholders — these point at the sites, not at profiles.
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
  ],
} as const;
