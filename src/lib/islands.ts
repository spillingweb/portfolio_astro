import type { IslandRegistry } from "@tinacms/astro/experimental";
import { getAbout, getProjects, getSkills } from "./data";
import type { QueryResult } from "@tinacms/astro/data";
import type {
  AboutQuery,
  ProjectQuery,
  SkillsQuery,
} from "../../tina/__generated__/types";
import AboutSection from "../components/AboutSection.astro";
import ProjectList from "../components/ProjectList.astro";
import SkillsSection from "../components/SkillsSection.astro";

export const islands: IslandRegistry = {
  about: {
    fetch: (_req, params) =>
      getAbout((params.get("lang") ?? "en") as "en" | "es" | "no"),
    component: AboutSection,
    wrapper: { tag: "div" },
    propsFromData: (data) => ({
      about: (data as QueryResult<AboutQuery>).data.about,
    }),
  },
  projects: {
    fetch: (_req, params) => getProjects(),
    component: ProjectList,
    wrapper: { tag: "div" },
    propsFromData: (data, params) => ({
      data: (data as QueryResult<ProjectQuery>).data.project,
      lang: params.get("lang") ?? "en",
    }),
  },
  skills: {
    fetch: (_req, _params) => getSkills(),
    component: SkillsSection,
    wrapper: { tag: "div" },
    propsFromData: (data) => ({
      skills: (data as QueryResult<SkillsQuery>).data.skills,
    }),
  },
};
