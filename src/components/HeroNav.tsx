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
const STORAGE_KEY = "preferred-language";

export default function HeroNav({
  navItems,
  role,
  available,
  langUrls,
  currentLang,
}: Props) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, currentLang);
    }
  }, [currentLang]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleLangChange = (l: string) => {
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <section className="min-h-screen flex flex-col border-b border-border">
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border shrink-0 gap-4">
        <div>
          <h2 className="font-heading font-black text-base tracking-tight">
            Spilling Web
          </h2>
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.18em] mt-0.5">
            {role}
          </p>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-1">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && (
                  <span className="text-[10px] text-foreground/20">·</span>
                )}
                <a
                  href={langUrls[l]}
                  onClick={() => handleLangChange(l)}
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
            <span className="font-mono text-[11px] text-muted-foreground">
              {available}
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="main" className="flex-1 flex flex-col">
        <ul className="flex-1 flex flex-col divide-y divide-border">
          {navItems.map((item, i) => (
            <li key={item.href} className="flex-1 flex flex-col">
              <a
                key={item.href}
                href={item.href}
                className="relative flex-1 flex items-center px-6 md:px-12 overflow-hidden group"
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 scale-y-0 origin-bottom"
                  style={{
                    background: item.color,
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
                      className={`font-mono text-xs md:text-sm transition-colors duration-300 shrink-0 w-6 text-muted-foreground ${item.textColor === "white" ? "group-hover:text-primary-foreground" : "group-hover:text-foreground"}`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-heading font-black tracking-tight leading-none transition-colors duration-300 text-foreground
                    ${item.textColor === "white" ? "group-hover:text-primary-foreground" : ""}`}
                      style={{
                        fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={28}
                    className={`shrink-0 transition-all duration-300 group-hover:translate-x-1 text-foreground/30 group-hover:-translate-y-1 ${item.textColor === "white" ? "group-hover:text-primary-foreground!" : "group-hover:text-foreground!"}`}
                    style={{
                      color: isTouch ? item.color : "#6e6e80",
                    }}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
