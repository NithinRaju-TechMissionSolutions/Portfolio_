import TechList from "./middleHeaderCom/TechSkills";
import { list1, list2, list3, list4 } from "../utils/commonImports";

export default function MainContainer() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row h-auto md:h-[100vh] px-6 md:px-20 py-12 gap-8 md:gap-96 bg-zinc-300"
    >
      <div className="self-start flex-1">
        <h1 className="text-3xl font-semibold pb-2 ">About Me</h1>
        <p className="text-xl font-normal leading-8 text-wrap">
          Hello! I'm Nithin Raju, a passionate MERN stack developer who thrives
          on creating dynamic and responsive web applications. With expertise in
          MongoDB, Express.js, React.js, and Node.js, I specialize in building
          seamless and robust end-to-end solutions. My journey in web
          development is driven by a dedication to innovation and excellence,
          allowing me to deliver applications that are not only functional but
          also visually appealing and user-friendly. Let's connect and explore
          how my skills can contribute to your next big project!
        </p>
      </div>
      <div id="skills" className="self-end flex-1">
        <h1 className="text-3xl font-semibold pb-2 pl-2">Skill Set</h1>
        <section className="flex flex-col">
          <div className="flex pb-1">
            {list1.map((elm, i) => (
              <TechList key={i} img={elm} i={i} />
            ))}
          </div>
          <div className="flex">
            {list2.map((elm, i) => (
              <TechList key={i} img={elm} i={i} />
            ))}
          </div>
          <div className="flex pb-1">
            {list3.map((elm, i) => (
              <TechList key={i} img={elm} i={i} />
            ))}
          </div>
          <div className="flex">
            {list4.map((elm, i) => (
              <TechList key={i} img={elm} i={i} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
