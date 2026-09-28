type EyebrowProps = {
  children: React.ReactNode;
  tone?: "accent" | "light";
  className?: string;
};

export function Eyebrow({ children, tone = "accent", className = "" }: EyebrowProps) {
  const color = tone === "light" ? "text-clay-light" : "text-clay";
  return (
    <p className={`eyebrow flex items-center gap-3 ${color} ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}
