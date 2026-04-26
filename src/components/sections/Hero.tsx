import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";

const stats = [
  { value: "2+ Years", label: "Professional Experience" },
  { value: "B2B + B2C", label: "Commerce Platforms" },
  { value: "React + Node", label: "Full Stack Delivery" },
  { value: "Multi-Domain", label: "Retail • Enterprise • Mobile" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center section-padding"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-blue-400/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-indigo-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.p
            variants={item}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-semibold"
          >
            Yoshitha Divi • Full Stack Ecommerce Developer
          </motion.p>

          <div className="space-y-5">
            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              Building Digital
              <span className="block">Experiences</span>

              <span className="block bg-gradient-to-r from-primary via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                That Drive Growth.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Creating high-performing ecommerce platforms, internal tools,
              and scalable customer products using React, Node.js, Shopify,
              and modern engineering practices.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-medium hover:scale-[1.02] transition-all shadow-lg"
            >
              View Work <FiArrowRight />
            </a>

            <a
              href="mailto:yoshithadivi@gmail.com?subject=Portfolio%20Inquiry"
              className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-border bg-background hover:bg-muted transition-all"
              aria-label="Send Email"
            >
              <FiMail />
            </a>
          </motion.div>

          {/* Mini Tags */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-3 pt-2"
          >
            {[
              "B2B Commerce",
              "B2C Storefronts",
              "Shopify Ecosystems",
              "Mobile Products",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 gap-5"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass-card p-7 min-h-[170px] flex flex-col justify-between"
            >
              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 mb-5" />

              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                {stat.value}
              </h3>

              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}