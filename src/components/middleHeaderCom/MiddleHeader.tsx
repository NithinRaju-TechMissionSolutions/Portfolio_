import { techList } from "../../utils/commonImports";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function MiddleHeader() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const icons = prefersReducedMotion ? techList : [...techList, ...techList];

  return (
    <section className="bg-darkPurple py-6 overflow-hidden group">
      <div
        className={`flex w-max gap-10 ${
          prefersReducedMotion
            ? "flex-wrap justify-center"
            : "animate-marquee"
        }`}
      >
        {icons.map((tech, i) => (
          <img
            key={`${tech.name}-${i}`}
            src={tech.img}
            alt={tech.name}
            loading="lazy"
            className="h-12 w-12 object-contain opacity-80 hover:opacity-100 hover:scale-110 duration-300"
          />
        ))}
      </div>
    </section>
  );
}
