import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Projects } from "../Projects/Projects";
import { PARTICLES_OPTIONS } from "../../utils/constants";

export function Main() {
  return (
    <Container>
      <Particles id="tsparticles" options={PARTICLES_OPTIONS} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}
