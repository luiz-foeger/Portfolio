import Cursor from "../components/ui/Cursor";
import About from "../components/common/About";
import Projects from "../components/common/Projects";
import Designs from "../components/common/Designs";
import Hero from "../components/common/Hero";
import Bento from "../components/common/Bento";

function Home() {
  return (
    <main>
      <Cursor />
      <Hero/>
      <About />
      <Bento />
      <Projects />
      <Designs />
    </main>
  );
}

export default Home;