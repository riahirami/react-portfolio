import { Container } from "./styles";
import VinayakSingh from "../../assets/RiahiRami.png";
import ScrollAnimation from "react-animate-on-scroll";
import HardSkills from "../HardSkills/HardSkills";
import { MY_DESCRIPTION, ROLE } from "../../utils/constants";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>{MY_DESCRIPTION.first_paragraph}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>{MY_DESCRIPTION.second_paragraph}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>{MY_DESCRIPTION.third_paragraph}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <HardSkills />
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={VinayakSingh} alt={ROLE} />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
