import type { IslandRegistry } from "@tinacms/astro/experimental";
import AboutSection from "../components/AboutSection.astro";
import ProjectList from "../components/ProjectListStatic.astro";
import SkillsSection from "../components/SkillsSection.astro";
import { getAbout, getProjects, getSkills } from "./data";
import type { QueryResult } from "@tinacms/astro/data";
import type {
  AboutQuery,
  ProjectConnection,
  ProjectQuery,
  Skills,
  SkillsQuery,
} from "../../tina/__generated__/types";

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
