// Home.jsx / page.tsx
import Cursor from "../components/ui/Cursor";
import Hero from "../components/common/Hero";
import About from "../components/common/About";
import Projects from "../components/common/Projects";
import Designs from "../components/common/Designs";
import Bento from "../components/common/Bento";

function Home() {
  return (
    <main className="bg-black min-h-screen w-full">
      <Cursor />
      <Hero />
      <div className="relative z-10 bg-black">
        <About />
        <Bento />
        <Projects />
        <Designs />
      </div>
    </main>
  );
}

export default Home;