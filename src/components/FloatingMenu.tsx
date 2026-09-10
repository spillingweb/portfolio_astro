import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  color: string;
  textColor: string;
}

interface Props {
  navItems: NavItem[];
  role: string;
  langUrls: { en: string; es: string; no: string };
  currentLang: string;
}

const LANGS = ["en", "es", "no"] as const;

const SOCIALS = [
  {
    href: "#",
    label: "GitHub",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "mailto:hello@spillingweb.dev",
    label: "Email",
    icon: () => <Mail size={16} />,
  },
];

export default function FloatingMenu({
  navItems,
  role,
  langUrls,
  currentLang,
}: Props) {
  const [showFloating, setShowFloating] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setShowFloating(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlayOpen]);

  return (
    <>
      <button
        onClick={() => setOverlayOpen(true)}
        aria-label="Open menu"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-foreground text-background rounded-full flex items-center justify-center shadow-xl hover:bg-foreground/85 transition-all duration-300"
        style={{
          opacity: showFloating ? 1 : 0,
          pointerEvents: showFloating ? "auto" : "none",
          transform: showFloating ? "scale(1)" : "scale(0.7)",
        }}
      >
        <Menu size={20} />
      </button>

      <div
        className="fixed inset-0 z-50 bg-[#111118] flex flex-col transition-all duration-500"
        style={{
          opacity: overlayOpen ? 1 : 0,
          pointerEvents: overlayOpen ? "auto" : "none",
          clipPath: overlayOpen
            ? "circle(150% at calc(100% - 3.5rem) calc(100% - 3.5rem))"
            : "circle(0% at calc(100% - 3.5rem) calc(100% - 3.5rem))",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/10 shrink-0">
          <div>
            <p className="font-heading font-black text-base text-white tracking-tight">
              Spilling Web
            </p>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.18em] mt-0.5">
              {role}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              {LANGS.map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && (
                    <span className="text-[10px] text-white/20">·</span>
                  )}
                  <a
                    href={langUrls[l]}
                    className={`font-mono text-[11px] uppercase tracking-wider transition-colors ${
                      currentLang === l
                        ? "text-white font-bold"
                        : "text-white/35 hover:text-white/70"
                    }`}
                  >
                    {l.toUpperCase()}
                  </a>
                </span>
              ))}
            </div>
            <button
              onClick={() => setOverlayOpen(false)}
              aria-label="Close menu"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white hover:border-white/40 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <nav className="flex-1 flex flex-col divide-y divide-white/10 overflow-hidden">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOverlayOpen(false)}
              className="flex-1 flex items-center justify-between px-6 md:px-12 group"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-xs text-white/20 w-6 shrink-0">
                  0{i + 1}
                </span>
                <span
                  className="font-heading font-black tracking-tight leading-none text-white group-hover:text-transparent transition-colors duration-200"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
                >
                  <span
                    className="inline-block transition-all duration-200"
                    style={
                      {
                        WebkitTextStroke: `2px ${
                          item.color === "#1A0A2E" ? "#FF3B6B" : item.color
                        }`,
                        color: "inherit",
                      } as React.CSSProperties
                    }
                  >
                    {item.label}
                  </span>
                </span>
              </div>
              <ArrowUpRight
                size={24}
                className="shrink-0 text-white/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
              />
            </a>
          ))}
        </nav>

        <div className="px-6 md:px-12 py-5 border-t border-white/10 flex items-center gap-6">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Icon />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
