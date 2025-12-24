import Cursor from "../components/Cursor";
import Hero from "../components/Hero/Hero";
import MeusProjetos from "../components/MeusProjetos/MeusProjetos";
import Projetos from "../components/Projetos/Projetos";
import SobreMim from "../components/SobreMim/SobreMim";

function Home() {
  return (
    <main>
      <Cursor />

      <Hero />
      <SobreMim />
      <Projetos />
    </main>
  );
}

export default Home;