import { motion } from "framer-motion";

const points = [
  "Delivered storefront features across product discovery and conversion journeys.",
  "Built React applications for customer-facing and internal systems.",
  "Developed Node.js APIs and backend workflows.",
  "Worked on cart, checkout, payment, and account experiences.",
  "Integrated third-party services and business tools.",
  "Contributed to B2B and B2C commerce solutions."
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-border/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Professional
            <span className="block text-primary">
              Journey
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Hands-on delivery across ecommerce, enterprise systems,
            and modern product development.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-start">
          {/* Left Meta */}
          <div className="space-y-4">
            <div className="glass-card p-5">
              <p className="text-sm text-muted-foreground mb-2">
                Duration
              </p>
              <p className="font-semibold">
                Feb 2024 — Present
              </p>
            </div>

            <div className="glass-card p-5">
              <p className="text-sm text-muted-foreground mb-2">
                Role
              </p>
              <p className="font-semibold">
                Ecommerce Developer
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="glass-card p-8">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
              Techdenali
            </p>

            <h3 className="text-2xl font-bold mb-6">
              Ecommerce Developer
            </h3>

            <ul className="space-y-4">
              {points.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-muted-foreground"
                >
                  <span className="text-primary mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}