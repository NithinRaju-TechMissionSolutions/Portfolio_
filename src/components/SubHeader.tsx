import { lazy, Suspense, useEffect, useState } from "react";
import { socialMediaList } from "../utils/commonImports";
import RotatingRole from "./RotatingRole";
import { useMediaQuery } from "../hooks/useMediaQuery";

const HeroModel = lazy(() => import("./HeroModel"));

export default function SubHeader() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (isDesktop) setShowModel(true);
  }, [isDesktop]);

  return (
    <main
      id="home"
      className="herobg-gradient-slant flex justify-between relative"
    >
      <div className="px-8 pt-28 md:px-20 md:py-36 text-white font-black duration-300">
        <p className="sm:text-xl md:text-2xl lg:text-2xl pb-4 font-bold">
          Hello<span className="animate-pulse">👋</span>
        </p>
        <p className="text-4xl md:text-6xl leading-10">I'm a</p>
        <p className="text-6xl md:text-7xl pb-4 min-h-[1.15em] md:min-h-[1.15em]">
          <RotatingRole />
        </p>
        <p className="text-xl md:text-2xl font-semibold">
          I build things for web.
        </p>
        <div className="flex gap-3 p-1">
          {socialMediaList.map((elm) => (
            <a
              key={elm.label}
              href={elm.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={elm.label}
            >
              <img
                src={elm.icon}
                className="w-8 md:w-10 hover:scale-110 duration-300"
                alt=""
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>

      {showModel && (
        <Suspense fallback={null}>
          <HeroModel />
        </Suspense>
      )}
    </main>
  );
}
