import heroImg from "../assets/main.png";
import { socialMediaList } from "../utils/commonImports";

export default function SubHeader() {
  return (
    <main id="home" className="herobg-gradient-slant flex justify-between">
      <ul className="px-8 pt-28 md:px-20  md:py-20 text-white font-black duration-300">
        <li className="sm:text-xl md:text-2xl lg:text-2xl pb-4 font-bold">
          Hello<span className="animate-pulse">👋</span>
        </li>
        <li className="text-4xl md:text-6xl leading-10">I'am a web</li>
        <li className="text-6xl md:text-7xl pb-4">Developer</li>
        <li className="text-xl md:text-2xl font-semibold">I build things for web.</li>
        <div className="flex gap-3 p-1">
          {socialMediaList.map((elm, i) => (
            <a
              key={i}
              href={elm.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={elm.icon}
                className="w-8 md:w-10 hover:scale-110 duration-300"
                alt="social media links"
              />
            </a>
          ))}
        </div>
      </ul>
      <div className="absolute top-0 -right-20 h-full justify-end hidden md:flex z-20">
        <img src={heroImg} alt="heroImg" />
      </div>
    </main>
  );
}
