import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { tinaField } from "tinacms/dist/react";
import type { ProjectConnectionQuery } from "../../tina/__generated__/types";

type Edge = NonNullable<ProjectConnectionQuery["projectConnection"]["edges"]>[number];

interface Props {
  edges: ProjectConnectionQuery["projectConnection"]["edges"];
  lang: "en" | "es" | "no";
}

export default function ProjectList({ edges, lang }: Props) {
  const projects = (edges ?? [])
    .filter((e): e is NonNullable<Edge> => e !== null)
    .map((e) => e.node)
    .filter((n): n is NonNullable<typeof n> => n !== null)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="mt-12 border-t border-border">
      {projects.map((p: any, i: number) => {
        const hov = hoveredProject === i;
        const isLight =
          p.accentColor === "#00B896" || p.accentColor === "#F59A00";
        const hovText = isLight ? "#111118" : "white";
        const hovMuted = isLight
          ? "rgba(17,17,24,0.6)"
          : "rgba(255,255,255,0.65)";
        const hovTag = isLight
          ? "rgba(17,17,24,0.12)"
          : "rgba(255,255,255,0.15)";
        const description = p.descriptions?.[lang] ?? p.descriptions?.en ?? "";

        return (
          <div
            key={p.title}
            className="relative border-b border-border cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(i)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={{
                background: p.accentColor,
                opacity: hov ? 1 : 0,
                transform: `scaleX(${hov ? 1 : 0})`,
                transformOrigin: "left",
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 py-7 md:py-8">
              <span
                className="font-heading font-black leading-none w-24 shrink-0 transition-colors duration-300"
                style={{
                  fontSize: "clamp(2rem,4vw,3.5rem)",
                  color: isTouch
                    ? p.accentColor
                    : hov
                    ? hovText + "30"
                    : "rgba(17,17,24,0.12)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3
                  className="font-heading font-black leading-none mb-2 transition-colors duration-300"
                  style={{
                    fontSize: "clamp(1.5rem,3.5vw,2.5rem)",
                    color: hov ? hovText : "#111118",
                  }}
                  data-tina-field={tinaField(p, "title")}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-lg transition-colors duration-300"
                  style={{ color: hov ? hovMuted : "#6E6E80" }}
                  data-tina-field={tinaField(p.descriptions, lang)}
                >
                  {description}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-3 shrink-0 md:w-56">
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {(p.tags ?? []).map((tag: string) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-sm transition-colors duration-300"
                      style={{
                        background: isTouch
                          ? p.accentColor + "18"
                          : hov
                          ? hovTag
                          : "rgba(17,17,24,0.06)",
                        color: isTouch
                          ? p.accentColor
                          : hov
                          ? hovText
                          : "#6E6E80",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-xs transition-colors duration-300"
                    style={{ color: hov ? hovMuted : "#6E6E80" }}
                    data-tina-field={tinaField(p, "year")}
                  >
                    {p.year}
                  </span>
                  <ArrowRight
                    size={18}
                    className="transition-all duration-300"
                    style={{
                      color: isTouch
                        ? p.accentColor
                        : hov
                        ? hovText
                        : "rgba(17,17,24,0.25)",
                      transform: hov ? "translateX(4px)" : "translateX(0)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
