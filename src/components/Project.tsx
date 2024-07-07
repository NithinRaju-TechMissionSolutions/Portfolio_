import { projectData } from "../utils/commonImports";

export default function ProjectContainer() {
  return (
    <section id="projects" className="px-20 py-10 bg-zinc-300">
      <h1 className="text-2xl font-semibold">My Projects</h1>
      <p className="font-light pb-2">
        Some of the projects I have build so far:
      </p>
      <div className="flex gap-10">
        {projectData.map((elm, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 p-2 justify-between border-4 border-gray-400 rounded-xl text-center shadow-2xl hover:scale-105 transform duration-300 bg-zinc-200"
          >
            <img className="rounded-lg" src={elm.img} alt="project images" />
            <h2 className="font-semibold">{elm.name}</h2>
            <p className="text-sm font-light">{elm.about}</p>
            <div className="flex justify-center gap-6">
              <a
                href={elm.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 hover:scale-125 duration-300"
              >
               <img src={elm.github} alt="" />
              </a>
              <a
                href={elm.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 hover:scale-125 duration-300"
              >
                <img src={elm.liveSite} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
