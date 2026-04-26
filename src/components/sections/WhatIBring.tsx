import { motion } from "framer-motion";

const strengths = [
  {
    title: "End-to-End Ownership",
    description:
      "Comfortable delivering features from frontend interfaces to backend APIs and final deployment.",
  },
  {
    title: "Commerce Expertise",
    description:
      "Hands-on experience across B2B and B2C ecommerce platforms, customer journeys, and business workflows.",
  },
  {
    title: "Business Thinking",
    description:
      "Build solutions that align user experience with conversion, efficiency, and measurable outcomes.",
  },
  {
    title: "Fast Adaptability",
    description:
      "Able to work across new tools, domains, teams, and evolving product requirements.",
  },
  {
    title: "Quality Execution",
    description:
      "Focused on clean UI, maintainable code, responsive experiences, and practical engineering decisions.",
  },
  {
    title: "Team Collaboration",
    description:
      "Experience contributing within delivery teams, handling feedback, timelines, and real project ownership.",
  },
];

export default function WhatIBring() {
  return (
    <section className="section-padding border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            What I Bring
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Value Beyond
            <span className="block text-primary">
              Just Code
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            A combination of technical execution, product thinking,
            and real-world delivery experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: idx * 0.06,
              }}
              whileHover={{ y: -5 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}