// Home.jsx / page.tsx
import Cursor from "../components/ui/Cursor";
import HeroToHeader from "../components/common/HeroToHeader";
// import About from "../components/common/About";
// import Projects from "../components/common/Projects";
// import Designs from "../components/common/Designs";
// import Bento from "../components/common/Bento";
import Services from "../components/ui/Services";
import ScrollManifesto from "../components/ui/ScrollManifesto";
import StackOrbit from "../components/ui/StackOrbit";

function Home() {
  return (
    <main className="bg-black min-h-screen w-full">
      <Cursor />
      <HeroToHeader />
      {/* <div className="relative z-10 bg-black"> */}
      <ScrollManifesto />
      <StackOrbit />
      <Services />
      {/* <About /> */}
      {/* <Bento /> */}
      {/* <Projects /> */}
      {/* <Designs /> */}
      {/* </div> */}
    </main>
  );
}

export default Home;