import Hero from "../components/Hero/Hero";
import MeusProjetos from "../components/MeusProjetos/MeusProjetos";
import Projetos from "../components/Projetos/Projetos";
import SobreMim from "../components/SobreMim/SobreMim";

function Home() {
  return (
    <>
      <Hero />
      <SobreMim />
      <Projetos />
    </>
  );
}

export default Home;