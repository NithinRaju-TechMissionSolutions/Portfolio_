import { useEffect, useRef, useState } from "react";
import resume from "../assets/Nithin_Raju_Resume.pdf";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const navLinks = [
  { hash: "home", label: "Home" },
  { hash: "about", label: "About" },
  // { hash: "skills", label: "Skills" },
  { hash: "projects", label: "Projects" },
  { hash: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isClickScrollingRef = useRef(false);
  const clickScrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash || !navLinks.some((link) => link.hash === hash)) return;

    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
      setActiveSection(hash);
    }
  }, []);

  useIntersectionObserver(
    () => navLinks.map(({ hash }) => document.getElementById(hash)),
    (entries) => {
      if (isClickScrollingRef.current) return;

      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRect.height - a.intersectionRect.height);

      if (visible.length > 0) {
        setActiveSection(visible[0].target.id);
      }
    },
    { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
  );

  useEffect(() => {
    return () => clearTimeout(clickScrollTimeoutRef.current);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(hash);
    if (element) {
      isClickScrollingRef.current = true;
      setActiveSection(hash);
      element.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${hash}`);

      clearTimeout(clickScrollTimeoutRef.current);
      clickScrollTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 1000);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="px-4 py-6 bg-gradient-slant w-full z-30 bg-transparent fixed sm:px-20">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="text-white sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col items-center gap-4 py-6 bg-darkPurple sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-10 sm:bg-transparent sm:py-0 text-white font-semibold`}
        >
          {navLinks.map(({ hash, label }) => (
            <li key={hash}>
              <a
                href={`#${hash}`}
                onClick={(event) => handleNavClick(event, hash)}
                className={`hover:scale-110 duration-300 inline-block ${
                  activeSection === hash ? "text-amber-400 font-bold" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resume}
              download="Nithin_Raju_Resume.pdf"
              className="hover:scale-110 duration-300 inline-block"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
