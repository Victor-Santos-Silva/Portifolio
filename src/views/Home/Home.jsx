import React from "react";
import Header from "../../components/Header/Header";
import Introducao from "../../components/Introducao/Introducao";
import ExperienciaProfissional from "../../components/ExperienciaProfissional/ExperienciaProfissional";
import Tecnologias from "../../components/Tecnologias/Tecnologias";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Introducao />
      <ExperienciaProfissional />
      <Tecnologias />
      <Footer />
    </>
  );
}

export default Home;
