import { HTMLAttributes } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface RevealSectionProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "section";
  delay?: number;
}

export default function RevealSection({
  as = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealSectionProps) {
  const Component = as;
  const { ref, revealClass } = useScrollReveal<HTMLElement>();

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${className} ${revealClass}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
