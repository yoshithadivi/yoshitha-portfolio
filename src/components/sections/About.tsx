import { motion } from "framer-motion";

const highlights = [
  "B2B + B2C Commerce",
  "Full Stack Delivery",
  "Shopify + Enterprise",
  "Web + Mobile Products",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
          About Me
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10">
          Building products where
          <span className="block text-primary">
            design meets business value.
          </span>
        </h2>

        {/* Premium Content Block */}
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed">
            I build ecommerce platforms that combine user experience,
            scalable engineering, and real business impact.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            With hands-on experience across retail, enterprise commerce,
            and mobile platforms, I’ve delivered storefront experiences,
            internal systems, and scalable solutions that help businesses grow.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card px-5 py-5 text-sm font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
