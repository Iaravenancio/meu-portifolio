import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title?: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-4xl"}`}
    >
      <span className="section-label font-mono text-[.8rem] uppercase tracking-[.22em] text-neon-cyan">
        {eyebrow.replace(/^\d+\s*[/.—-]\s*/, "").replace(/^\/+\s*/, "")}
      </span>
      {title && (
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}