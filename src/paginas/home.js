import Hero from "../components/Hero/Hero";
import MeusProjetos from "../components/MeusProjetos/MeusProjetos";
import SobreMim from "../components/SobreMim/SobreMim";

function Home() {
  return (
    <>
      <Hero />
      <SobreMim />
      <MeusProjetos />
    </>
  );
}

export default Home;