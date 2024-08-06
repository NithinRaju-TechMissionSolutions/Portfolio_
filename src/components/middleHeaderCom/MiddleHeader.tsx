import TextSprtBlock from "./SprtBlock";
import { stackList } from "../../utils/commonImports";

export default function MiddleHeader() {
  const contentData = [
    {
      number: 2.5,
      content1: "YEARS OF HANDS",
      content2: "ON EXPERIENCE",
    },
    {
      number: 4,
      content1: "PROJECTS",
      content2: "COMPLETED",
    },
  ];
  return (
    <main className="px-6 md:px-16 py-4 flex flex-col md:flex-row justify-start items-center gap-14 md:gap-10 bg-darkPurple">
      <div className="flex gap-4 md:gap-20">
      {contentData.map((elm) => (
        <TextSprtBlock
          key={elm.number}
          number={elm.number}
          content1={elm.content1}
          content2={elm.content2}
        />
      ))}

      </div>
      <section className="flex gap-5">
        {stackList.map((elm, i) => (
          <img
            className="h-16 p-1 pl-1.5 pr-1.5 duration-300 animate-bounce"
            key={i}
            src={elm}
            alt="Technologies"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </section>
    </main>
  );
}
