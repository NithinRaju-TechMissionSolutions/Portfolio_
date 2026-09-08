import RevealSection from "./RevealSection";

interface ProjectCardProps {
  name: string;
  about: string;
  tech: string[];
  img: string;
  // liveLink: string;
  codeLink: string;
  // liveSite: string;
  github: string;
  delay: number;
}

export default function ProjectCard({
  name,
  about,
  tech,
  img,
  codeLink,
  github,
  delay,
}: ProjectCardProps) {
  return (
    <RevealSection
      delay={delay}
      className="w-full flex flex-col gap-2 p-2 justify-between border-4 border-gray-400 rounded-xl text-center shadow-2xl hover:scale-105 transform duration-300 bg-zinc-200"
    >
      <div className="aspect-[20/13] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={`${name} project screenshot`}
          loading="lazy"
        />
      </div>
      <h2 className="font-semibold">{name}</h2>
      <p className="text-sm font-light">{about}</p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs font-medium px-2 py-0.5 rounded-full bg-darkPurple text-white"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-6">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} source code on GitHub`}
          className="w-8 hover:scale-125 duration-300"
        >
          <img src={github} alt="" aria-hidden="true" />
        </a>
      </div>
    </RevealSection>
  );
}
