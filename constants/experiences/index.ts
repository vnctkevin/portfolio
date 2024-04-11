import { ExperiencesType } from "./types";

import WorkExperience from "./works";
import ProjectsExperience from "./projects";
import OrganizationsExperience from "./organizations";
import EducationsExperience from "./educations";

export const EXPERIENCES: ExperiencesType = {
    Work: WorkExperience,
    Projects: ProjectsExperience,
    Organizations: OrganizationsExperience,
    Educations:EducationsExperience,
}