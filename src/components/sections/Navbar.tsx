import { motion } from "framer-motion";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach((link) => {
      const section = document.getElementById(link.id);

      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActive(link.id);
            }
          },
          {
            threshold: 0.45,
          }
        );

        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-xl font-bold tracking-tighter">
            YD.
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              {links.map((link) => {
                const isActive = active === link.id;

                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      className={`transition-colors ${isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {link.name}
                    </a>

                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary rounded-full"
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center space-x-4 border-l border-border pl-6">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>

              <a
                href="/Yoshitha_Divi_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme}>
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            <button onClick={toggleMenu}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
        >
          <ul className="flex flex-col px-6 py-5 space-y-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="pt-4 border-t border-border">
              <a
                href="/YOSHITHA_DIVI_ECommerce_Resume_2026-07-07.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium"
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
