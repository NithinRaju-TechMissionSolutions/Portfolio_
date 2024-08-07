import TextSprtBlock from "./SprtBlock";
import { stackList } from "../../utils/commonImports";
import { useEffect, useState } from "react";

export default function MiddleHeader() {
  const [experienceTime, setExperienceTime] = useState(calculateExperience());
  useEffect(() => {
    const interval = setInterval(() => {
      setExperienceTime(calculateExperience());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const contentData = [
    {
      id:1,
      number: experienceTime,
      content1: "YEARS OF HANDS",
      content2: "ON EXPERIENCE",
    },
    {
      id:2,
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
            key={elm.id}
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

function calculateExperience() {
  const startDate: Date = new Date("2022-01-01");
  const currentDate: Date = new Date();
  const diffInMilliseconds = Math.abs(
    currentDate.getTime() - startDate.getTime()
  );
  const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (diffInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30)
  );

  return `${years}.${months}`;
}
