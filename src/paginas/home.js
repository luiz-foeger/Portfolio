import Hello from "../components/Hello/Hello";
import MeusProjetos from "../components/MeusProjetos/MeusProjetos";
import SobreMim from "../components/SobreMim/SobreMim";

function Home() {
  return (
    <>
      <Hello />
      <SobreMim />
      <MeusProjetos />
    </>
  );
}

export default Home;