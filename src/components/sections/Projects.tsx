import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Luxury Furniture Ecommerce Platform",
    type: "Featured Project",
    summary:
      "Delivered high-converting storefront experiences for a premium furniture brand across product discovery, landing pages, and purchase journeys.",
    tech: ["Shopify", "JavaScript", "Liquid"],
    achievements: [
      "Built PDP, PLP, and landing page experiences",
      "Improved search and discovery flows",
      "Implemented swatch request journeys",
      "Enhanced responsive storefront UX",
    ],
    featured: true,
    link: "https://www.albanypark.com/",
    linkText: "Public Reference • Albany Park",
  },
  {
    title: "Global Electronics B2B Commerce Platform",
    type: "Featured Project",
    summary:
      "Built enterprise purchasing workflows for global business users across cart, checkout, procurement, payments, and account systems.",
    tech: ["React", "AEM"],
    achievements: [
      "Worked on cart and checkout journeys",
      "Supported punchout procurement flows",
      "Improved payment and shipping accounts",
      "Enhanced account management experiences",
    ],
    link: "https://www.arrow.com/",
    linkText: "Public Reference • Arrow Electronics",
  },
  {
    title: "ParkSmart Internal Product",
    type: "Internal Product",
    summary:
      "Developed a mobile parking platform enabling reservations, owner operations, and real-time booking management.",
    tech: ["React Native", "SQL"],
    achievements: [
      "Integrated OTP authentication",
      "Implemented maps and location flows",
      "Built booking management journeys",
      "Handled check-in / check-out flows",
    ],
  },
  {
    title: "Commerce Automation App Suite",
    type: "Internal Tools",
    summary:
      "Created internal commerce tools and Shopify apps to improve merchandising, conversion, and business efficiency.",
    tech: ["React", "Node.js", "Shopify"],
    achievements: [
      "Dynamic filtering tools",
      "Bundle builder experiences",
      "Review automation flows",
      "Quote requests and tracking widgets",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Featured Work
            <span className="block text-primary">
              Across Commerce & Products
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of live platforms, internal products,
            and business systems I’ve contributed to.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`glass-card p-8 flex flex-col group ${project.featured ? "lg:col-span-2" : ""
                }`}
            >
              {/* Top */}
              <div className="flex justify-between items-start gap-4 mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-2">
                    {project.type}
                  </p>

                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {project.linkText}
                    </a>
                  )}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                    aria-label="Visit live project"
                  >
                    <FiExternalLink />
                  </a>
                ) : (
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground opacity-40">
                    <FiExternalLink />
                  </div>
                )}
              </div>

              {/* Summary */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                {project.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                <h4 className="text-sm font-semibold text-foreground">
                  Highlights
                </h4>

                <div className="grid sm:grid-cols-2 gap-2">
                  {project.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-[2px]">▹</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/60">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                  >
                    {tech}
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