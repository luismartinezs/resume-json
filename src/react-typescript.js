import basicInfo from "../_partials/basic-info.js";
import certifications from "../_partials/certifications.js";
import education from "../_partials/education.js";
import projects from "../_partials/projects.js";
import skills from "../_partials/skills.js";
import workExperience from "../_partials/work-experience.js";
import { starItemBySkill } from "./util.js";

export default {
  ...basicInfo,
  jobTitle: "React Typescript Web Developer",
  about:
    "Luis has 5 years of experience as web developer, and 2 years of experience with React and Typescript. He is passionate about crafting clean, well-structured code that follows best practices. Luis stays up to date with industry developments and continuously challenges himself with side projects.",
  mostAmazingDevelopment:
    "Audited and enhanced the web accessibility of a complex enterprise application using React and TypeScript, well within allocated budget constraints, for a company valued at $760 million (as of 2021)",
  preferredEnvironment: [
    "React",
    "Typescript",
    "Tailwind CSS",
    "Next.js",
    "Visual Studio Code (VS Code)",
  ],
  education: education,
  workExperience: starItemBySkill(workExperience, ["react", "typescript"]),
  certifications: starItemBySkill(certifications, ["react", "typescript"]),
  skills: skills,
  projects: starItemBySkill(projects, ["react", "typescript"]),
};
