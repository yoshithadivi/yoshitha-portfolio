import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Let’s Connect
        </h2>

        <p className="text-lg text-muted-foreground mb-12">
          Always happy to connect, discuss ideas, collaborate on interesting products,
          or talk about modern ecommerce development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:yoshithadivi@gmail.com"
            className="inline-flex items-center justify-center h-14 px-8 w-full sm:w-auto rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all gap-2 text-lg"
          >
            <FiMail /> Send Email
          </a>
          <a
            href="/YOSHITHA_DIVI_ECommerce_Resume_2026-07-07.pdf"
            download="YOSHITHA_DIVI_Resume.pdf"
            className="inline-flex items-center justify-center h-14 px-8 w-full sm:w-auto rounded-full border border-border bg-background hover:bg-muted font-medium transition-all gap-2 text-lg"
          >
            <FiDownload /> Download Resume
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:yoshithadivi@gmail.com"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <FiMail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yoshitha-divi-781a4a213"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yoshithadivi"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
