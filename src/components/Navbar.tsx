import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../assets/Resume of Nithin Raju.pdf";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="px-4 py-6 bg-gradient-slant w-full z-10 bg-transparent fixed sm:px-20">
      <div className="flex justify-center items-center sm:justify-start">
        <ul className="flex sm:items-center sm:gap-10 gap-6 text-white font-semibold">
          <Link
            to={"/#home"}
            className={`hover:scale-110 duration-300 ${
              location.hash === "#home" ? "text-amber-400 font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to={"/#about"}
            className={`hover:scale-110 duration-300 ${
              location.hash === "#about" ? "text-amber-400 font-bold" : ""
            }`}
          >
            About
          </Link>
          <Link
            to={"/#skills"}
            className={`hover:scale-110 duration-300 ${
              location.hash === "#skills" ? "text-amber-400 font-bold" : ""
            }`}
          >
            Skills
          </Link>
          <Link
            to={"/#projects"}
            className={`hover:scale-110 duration-300 ${
              location.hash === "#projects" ? "text-amber-400 font-bold" : ""
            }`}
          >
            Projects
          </Link>
          <a
            href={resume}
            download="Nithin_Raju_Resume.pdf"
            className="hover:scale-110 duration-300"
          >
            Resume
          </a>
        </ul>
      </div>
    </nav>
  );
}
