import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { PARTICLES_OPTIONS } from "../../utils/constants";
import Router from "routes/Router";
import { BrowserRouter } from "react-router-dom";

export function Main() {
  return (
    <Container>
      <Particles id="tsparticles" options={PARTICLES_OPTIONS} />
      <Hero />
      <About />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Contact />
    </Container>
  );
}
