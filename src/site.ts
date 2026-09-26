// Static site identity. Kept in one place because several components need the
// same email and blog URL; content.yml holds products, projects and skills.
export const site = {
  name: "Shyam Sunder",
  role: "Machine Learning Engineer",
  company: "McDermott",
  email: "shyam10kwd@gmail.com",
  githubUsername: "iashyam",
  blogUrl: "https://iashyam.in",
  socials: [
    { label: "GitHub", href: "https://github.com/iashyam" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/iashyam" },
    { label: "X", href: "https://twitter.com/shyam10kwd" },
  ],
} as const;
