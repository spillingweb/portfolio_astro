import { requestWithMetadata } from "@tinacms/astro/data";
import client from "../../tina/__generated__/client";
import type { Lang } from "../i18n/translations";


export const getAbout = (lang: Lang) =>
  requestWithMetadata(client.queries.about({ relativePath: `${lang}.json` }), {
    priority: "primary",
  });

export const getProjects = () =>
  requestWithMetadata(client.queries.projectConnection(), {
    priority: "primary",
  });

export const getSkills = () =>
  requestWithMetadata(client.queries.skills({ relativePath: "skills.json" }), {
    priority: "primary",
  });

export const getSettings = () =>
  requestWithMetadata(
    client.queries.settings({ relativePath: "settings.json" }),
    { priority: "primary" },
  );
