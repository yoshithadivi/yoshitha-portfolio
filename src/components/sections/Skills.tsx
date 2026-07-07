import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Engineering",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Angular",
      "Tailwind CSS",
      "HTML/CSS",
      "Responsive UI",
      "Next.js"
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "API Integrations",
    ],
  },
  {
    category: "Commerce Platforms",
    items: [
      "Shopify",
      "SAP Commerce",
      "Liquid",
      "Metafields",
      "Theme Customization",
    ],
  },
  {
    category: "Databases",
    items: [
      "MongoDB",
      "SQL",
    ],
  },
  {
    category: "Mobile Development",
    items: [
      "React Native",
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      "Git",
      "Postman",
      "Jira",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Core Engineering
            <span className="block text-primary">
              Expertise
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Practical experience across frontend development,
            backend systems, ecommerce platforms, and modern product delivery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold mb-5 pb-3 border-b border-border/60">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 rounded-full text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
