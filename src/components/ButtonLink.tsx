import { ArrowRight } from "lucide-react";

const ButtonLink = ({
  href,
  variant = "primary",
  withArrow,
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  withArrow?: boolean;
  children: React.ReactNode;
}) => {
  const className = `py-4 px-6 flex items-center justify-center gap-2 transition-colors group text-white font-semibold rounded-xs ${
    variant === "secondary"
      ? "bg-[#111118] hover:bg-[#111118]/85 transition-colors group"
      : "bg-primary text-white hover:bg-[#7A1AE8] "
  }`;
  return (
    <a href={href} className={className}>
      {children}
      {withArrow && (
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      )}
    </a>
  );
};

export default ButtonLink;
