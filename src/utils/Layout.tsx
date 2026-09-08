import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import MiddleHeader from "../components/middleHeaderCom/MiddleHeader";
import MainContainer from "../components/MainContentStatge";
import ProjectContainer from "../components/Project";
import Contact from "../components/Contact";

const Layout = () => {
  return (
    <main className="overflow-hidden">
      <div className="relative">
        <Navbar />
        <SubHeader />
        <MiddleHeader />
      </div>
      <MainContainer />
      <ProjectContainer />
      <Contact />
    </main>
  );
};

export default Layout;
