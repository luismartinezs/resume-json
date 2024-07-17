import basicInfo from "./_partials/basic-info";
import certifications from "./_partials/certifications";
import education from "./_partials/education";
import projects from "./_partials/projects";
import skills from "./_partials/skills";
import workExperience from "./_partials/work-experience";

export default {
  ...basicInfo,
  "preferredEnvironment": [
    "React",
    "Typescript",
    "Tailwind CSS",
    "Next.js",
    "Vue",
    "Nuxt.js",
    "Visual Studio Code (VS Code)"
  ],
  "education": education,
  "workExperience": workExperience,
  "certifications": certifications,
  "skills": skills,
  "projects": projects
}
