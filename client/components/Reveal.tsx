import { cn } from "@/lib/utils";
import React from "react";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  delay?: number; // ms
  once?: boolean;
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  once = true,
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current as Element | null;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "in-view", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
