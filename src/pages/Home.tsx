import Cursor from "../components/ui/Cursor";
import Hero from "../components/common/Hero";
import About from "../components/common/About";
import Projects from "../components/common/Projects";
import Designs from "../components/common/Designs";

function Home() {
  return (
    <main>
      <Cursor />

      <Hero />
      <About />
      <Projects />
      <Designs />
    </main>
  );
}

export default Home;