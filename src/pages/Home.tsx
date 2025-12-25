import Cursor from "../components/ui/Cursor";
import Hero from "../components/common/Hero";
import About from "../components/common/About";
import Projects from "../components/common/Projects";

function Home() {
  return (
    <main>
      <Cursor />

      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default Home;