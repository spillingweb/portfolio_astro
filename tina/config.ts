import { defineConfig } from "tinacms";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ── Site Settings (singleton) ───────────────────────────
      {
        name: "settings",
        label: "Site Settings",
        path: "content",
        format: "json",
        match: { include: "settings" },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/en",
        },
        fields: [
          {
            name: "studioName",
            label: "Studio Name",
            type: "string",
            required: true,
          },
          {
            name: "email",
            label: "Contact Email",
            type: "string",
            required: true,
          },
          { name: "githubUrl", label: "GitHub URL", type: "string" },
          { name: "linkedinUrl", label: "LinkedIn URL", type: "string" },
          {
            name: "available",
            label: "Available for new projects",
            type: "boolean",
          },
        ],
      },

      // ── Projects (collection) ───────────────────────────────
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "json",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) =>
              values?.title
                ? values.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
                : "untitled",
          },
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            required: true,
            isTitle: true,
          },
          { name: "year", label: "Year", type: "string", required: true },
          {
            name: "order",
            label: "Display Order",
            type: "number",
            ui: { description: "Lower numbers appear first." },
          },
          {
            name: "accentColor",
            label: "Accent Color (hex)",
            type: "string",
            ui: { description: "e.g. #FF3B6B" },
          },
          {
            name: "tags",
            label: "Technology Tags",
            type: "string",
            list: true,
          },
          {
            name: "descriptions",
            label: "Descriptions (per language)",
            type: "object",
            fields: [
              {
                name: "en",
                label: "English",
                type: "string",
                required: true,
                ui: { component: "textarea" },
              },
              {
                name: "es",
                label: "Spanish",
                type: "string",
                ui: { component: "textarea" },
              },
              {
                name: "no",
                label: "Norwegian",
                type: "string",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      // ── About Content (one file per language) ───────────────
      {
        name: "about",
        label: "About Content",
        path: "content/about",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: ({ document }) => {
            const lang = document._sys.filename.replace(".json", "");
            return `/${lang}`;
          },
        },
        fields: [
          {
            name: "lang",
            label: "Language Code",
            type: "string",
            ui: { component: "hidden" },
          },
          {
            name: "p1",
            label: "Paragraph 1",
            type: "string",
            required: true,
            ui: { component: "textarea" },
          },
          {
            name: "p2",
            label: "Paragraph 2",
            type: "string",
            ui: { component: "textarea" },
          },
          {
            name: "p3",
            label: "Paragraph 3",
            type: "string",
            ui: { component: "textarea" },
          },
          { name: "cta", label: "CTA Button Text", type: "string" },
        ],
      },

      // ── Skills (singleton list) ─────────────────────────────
      {
        name: "skills",
        label: "Skills",
        path: "content",
        format: "json",
        match: { include: "skills" },
        ui: {
          router: () => "/en", // remove the #skills hash — it causes a redirect
        },
        fields: [
          {
            name: "items",
            label: "Skill Tags",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name ?? "Skill" }) },
            fields: [
              {
                name: "name",
                label: "Name",
                type: "string",
                required: true,
                isTitle: true,
              },
              {
                name: "group",
                label: "Category",
                type: "number",
                ui: { description: "0 = Frontend · 1 = Backend · 2 = Tools" },
              },
            ],
          },
          {
            name: "services",
            label: "Service Cards",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.en?.title ?? "Service" }),
            },
            fields: [
              {
                name: "en",
                label: "English",
                type: "object",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    isTitle: true,
                    required: true,
                  },
                  {
                    name: "desc",
                    label: "Description",
                    type: "string",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                name: "es",
                label: "Spanish",
                type: "object",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    isTitle: true,
                    required: true,
                  },
                  {
                    name: "desc",
                    label: "Description",
                    type: "string",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                name: "no",
                label: "Norwegian",
                type: "object",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    isTitle: true,
                    required: true,
                  },
                  {
                    name: "desc",
                    label: "Description",
                    type: "string",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
