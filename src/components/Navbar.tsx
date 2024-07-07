import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../assets/Resume of Nithin Raju.pdf";

export default function Navbar() {
  const location = useLocation();
  console.log(location.hash, "ooo");

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
    <nav
      className={`px-20 py-6 bg-gradient-slant w-full z-10  bg-transparent fixed`}
    >
      <ul className="flex justify-start items-center gap-10 text-white font-semibold">
        <Link
          to={"/#home"}
          className={location.hash === "#home" ? "underline" : ""}
        >
          Home
        </Link>

        <Link
          to={"/#about"}
          className={location.hash === "#about" ? "underline" : ""}
        >
          About
        </Link>

        <Link
          to={"/#skills"}
          className={location.hash === "#skills" ? "underline" : ""}
        >
          Skills
        </Link>

        <Link
          to={"/#projects"}
          className={location.hash === "#projects" ? "underline" : ""}
        >
          Projects
        </Link>

        <a href={resume} download="Nithin_Raju_Resume.pdf" className="">
          Resume
        </a>
      </ul>
    </nav>
  );
}
