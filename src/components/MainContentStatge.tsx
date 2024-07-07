import TechList from "./middleHeaderCom/TechSkills";
import { list1, list2, list3, list4 } from "../utils/commonImports";

export default function MainContainer() {
  return (
    <section id="about" className=" flex h-[80vh] px-20 py-12 gap-64 bg-zinc-300">
      <div className="self-start">
        <h1 className="text-3xl font-semibold pb-2 ">About Me</h1>
        <p className="text-xl font-normal leading-8 text-wrap">
          Hello! I'm Nithin Raju, a passionate MERN stack developer with 2.5
          years of hands-on experience in creating dynamic and responsive web
          applications. My expertise lies in building end-to-end solutions using
          MongoDB, Express.js, React.js, and Node.js, which allows me to craft
          seamless and robust applications.
        </p>
      </div>
      <div id="skills" className="self-end">
        <h1 className="text-3xl font-semibold pb-2 pl-2">Skill Set</h1>
        <section className="flex flex-col">
          <div className="flex pb-1">
            {list1.map((elm, i) => (
              <TechList key={i} img={elm} i={i} />
            ))}
          </div>
          <div className="flex">
            {list2.map((elm, i) => (
              <TechList key={i} img={elm} i={i}/>
            ))}
          </div>
          <div className="flex pb-1">
            {list3.map((elm, i) => (
              <TechList key={i} img={elm} i={i}/>
            ))}
          </div>
          <div className="flex">
            {list4.map((elm, i) => (
              <TechList key={i} img={elm} i={i}/>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
