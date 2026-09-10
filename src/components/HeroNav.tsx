import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  color: string;
  textColor: string;
}

interface Props {
  navItems: NavItem[];
  role: string;
  available: string;
  langUrls: { en: string; es: string; no: string };
  currentLang: string;
}

const LANGS = ["en", "es", "no"] as const;

export default function HeroNav({ navItems, role, available, langUrls, currentLang }: Props) {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="min-h-screen flex flex-col border-b border-border">
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border shrink-0 gap-4">
        <div>
          <p className="font-heading font-black text-base tracking-tight">Spilling Web</p>
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.18em] mt-0.5">{role}</p>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-1">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-[10px] text-foreground/20">·</span>}
                <a
                  href={langUrls[l]}
                  className={`font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    currentLang === l
                      ? "text-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.toUpperCase()}
                </a>
              </span>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-[11px] text-muted-foreground">{available}</span>
          </div>
        </div>
      </header>

      <nav className="flex-1 flex flex-col divide-y divide-border">
        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className="relative flex-1 flex items-center px-6 md:px-12 overflow-hidden group"
            onMouseEnter={() => setHoveredNav(i)}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <div
              className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{
                background: item.color,
                transform: hoveredNav === i ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "bottom",
              }}
            />
            {isTouch && (
              <div
                className="absolute left-0 top-3 bottom-3 w-1.5 rounded-full"
                style={{ background: item.color }}
              />
            )}
            <div className="relative z-10 flex items-center justify-between w-full gap-4">
              <div className="flex items-baseline gap-6 md:gap-10">
                <span
                  className="font-mono text-xs md:text-sm transition-colors duration-300 shrink-0 w-6"
                  style={{
                    color: isTouch
                      ? item.color
                      : hoveredNav === i
                      ? item.textColor + "80"
                      : "rgba(17,17,24,0.2)",
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  className="font-heading font-black tracking-tight leading-none transition-colors duration-300"
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                    color: hoveredNav === i ? item.textColor : "#111118",
                  }}
                >
                  {item.label}
                </span>
              </div>
              <ArrowUpRight
                size={28}
                className="shrink-0 transition-all duration-300"
                style={{
                  color: isTouch
                    ? item.color
                    : hoveredNav === i
                    ? item.textColor
                    : "rgba(17,17,24,0.2)",
                  transform: hoveredNav === i ? "translate(4px,-4px)" : "translate(0,0)",
                }}
              />
            </div>
          </a>
        ))}
      </nav>
    </section>
  );
}