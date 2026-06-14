import { cn } from "@/lib/utils";
import logo from "@/assets/img/Logo_qoretech_neon.svg";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className,
  showText = true,
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: { mark: 24, text: "text-base" },
    md: { mark: 30, text: "text-lg" },
    lg: { mark: 40, text: "text-2xl" },
  };
  const s = sizes[size];

  return (
    <div className={cn("inline-flex items-center gap-2.5 shrink-0", className)}>
      <img
        src={logo.src}
        alt="QoreTech Logo"
        width={s.mark + 20}
        height={s.mark + 20}
      />

      {showText && (
        <span
          className={cn("font-semibold tracking-tight text-frost-100", s.text)}
        >
          Qore<span className="text-neon-500">Tech</span>
        </span>
      )}
    </div>
  );
}
