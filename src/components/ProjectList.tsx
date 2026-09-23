import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { tinaField } from "tinacms/dist/react";
import type { ProjectConnectionQuery } from "../../tina/__generated__/types";
import { GitHub } from "../lib/socialIcons";

type Edge = NonNullable<
  ProjectConnectionQuery["projectConnection"]["edges"]
>[number];

interface Props {
  edges: ProjectConnectionQuery["projectConnection"]["edges"];
  lang: "en" | "es" | "no";
}

const ACCENT_COLORS = ["#E8F5E9", "#FCE4EC", "#E3F2FD", "#FFF8E1", "#F3E5F5"];

export default function ProjectList({ edges, lang }: Props) {
  const projects = (edges ?? [])
    .filter((e): e is NonNullable<Edge> => e !== null)
    .map((e) => e.node)
    .filter((n): n is NonNullable<typeof n> => n !== null)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

  return (
    <div className="mt-12 grid sm:grid-cols-2 gap-5">
      {projects.map((p, i) => {
        const description = p.descriptions?.[lang] ?? p.descriptions?.en ?? "";
        return (
          <div
            key={p.title}
            className="group border border-border bg-card rounded-sx overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            {/* Accent bar */}
            <div
              className="h-0.75 shrink-0"
              style={{
                background:
                  p.accentColor || ACCENT_COLORS[i % ACCENT_COLORS.length],
              }}
            />

            {/* Media */}
            <div
              className="relative overflow-hidden"
              style={{ height: "300px" }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  data-tina-field={tinaField(p, "image")}
                />
              ) : p.videoUrl ? (
                <video
                  width="100%"
                  preload="metadata"
                  className="w-full h-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                >
                  <source src={p.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              <span className="absolute top-3 right-3 font-mono text-[10px] bg-black/55 text-white/80 px-2 py-1 rounded-sx backdrop-blur-sm">
                {p.year}
              </span>
              {p.videoUrl && (
                <div
                  className="absolute inset-0  flex items-end p-3.5"
                  data-tina-field={tinaField(p, "videoUrl")}
                >
                  <span className="flex items-center gap-1.5 bg-black/65 text-white font-mono text-[10px] px-2.5 py-1 rounded-sx backdrop-blur-sm border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                    Demo recording
                  </span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="font-mono text-xs text-muted-foreground/35 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-heading font-black text-xl leading-tight truncate"
                    data-tina-field={tinaField(p, "title")}
                  >
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={17}
                  className="text-muted-foreground/25 shrink-0 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-0.5"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags &&
                  p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-sx bg-foreground/5 text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
              </div>

              <p
                className="text-sm text-muted-foreground leading-relaxed flex-1"
                data-tina-field={tinaField(p, "descriptions")}
              >
                {description}
              </p>

              {(p.githubUrl || p.liveUrl) && (
                <div className="mt-5 pt-4 border-t border-border flex items-center gap-4">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      data-tina-field={tinaField(p, "githubUrl")}
                    >
                      <GitHub size={13} color="currentColor" /> GitHub
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      data-tina-field={tinaField(p, "liveUrl")}
                    >
                      <ExternalLink size={13} /> Live Site
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
