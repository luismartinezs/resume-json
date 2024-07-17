import basicInfo from "../_partials/basic-info.js";
import certifications from "../_partials/certifications.js";
import education from "../_partials/education.js";
import projects from "../_partials/projects.js";
import skills from "../_partials/skills.js";
import workExperience from "../_partials/work-experience.js";

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
