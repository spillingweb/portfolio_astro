import type { IslandRegistry } from "@tinacms/astro/experimental";
import AboutSection from "../components/AboutSection.astro";
import ProjectList from "../components/ProjectListStatic.astro";
import SkillsSection from "../components/SkillsSection.astro";
import { getAbout, getProjects, getSkills } from "./data";

export const islands: IslandRegistry = {
  about: {
    fetch: (_req, params) => getAbout((params.get("lang") ?? "en") as "en" | "es" | "no"),
    component: AboutSection,
    wrapper: { tag: "div" },
    propsFromData: (data: any) => ({ about: data.data.about }),
  },
 projects: {
    fetch: (_req, params) => getProjects(),
    component: ProjectList,
    wrapper: { tag: "div" },
    propsFromData: (data: any, params) => ({
      edges: data.data.projectConnection.edges,
      lang: params.get("lang") ?? "en",
    }),
  },
  skills: {
    fetch: (_req, _params) => getSkills(),
    component: SkillsSection,
    wrapper: { tag: "div" },
    propsFromData: (data: any) => ({ skills: data.data.skills }),
  },
};