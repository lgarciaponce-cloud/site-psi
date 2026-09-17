/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Header } from "./components/Header";
import { HeroSobre } from "./components/HeroSobre";
import { AreasAtuacao } from "./components/AreasAtuacao";
import { Supervisao } from "./components/Supervisao";
import { Psicanalise } from "./components/Psicanalise";
import { Publicacoes } from "./components/Publicacoes";
import { ConteudoContinuo } from "./components/ConteudoContinuo";
import { ImersaoDetalhes } from "./components/ImersaoDetalhes";
import { Depoimentos } from "./components/Depoimentos";
import { GrupoEstudos } from "./components/GrupoEstudos";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { ImageProvider } from "./context/ImageContext";

export default function App() {
  return (
    <ImageProvider>
      <div className="antialiased bg-[#f7e9e0] text-[#333333] min-h-screen">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>

        <Header />

        <main id="main-content">
          <HeroSobre />
          <AreasAtuacao />
          <Supervisao />
          <Psicanalise />
          <Publicacoes />
          <ConteudoContinuo />
          <ImersaoDetalhes />
          <Depoimentos />
          <GrupoEstudos />
          <Contato />
        </main>

        <Footer />
      </div>
    </ImageProvider>
  );
}
