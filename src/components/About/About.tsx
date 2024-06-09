import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import HardSkills from "../HardSkills/HardSkills";
import { MY_DESCRIPTION, ROLE } from "../../utils/constants";
import { images } from "utils/images";
import { generateDelayedAnimations } from "utils/helpers";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={generateDelayedAnimations(1)}
        >
          <p>{MY_DESCRIPTION.first_paragraph}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={generateDelayedAnimations(1)}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>{MY_DESCRIPTION.second_paragraph}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={generateDelayedAnimations(2)}
        >
          <p>{MY_DESCRIPTION.third_paragraph}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={generateDelayedAnimations(3)}
        >
          <h3>Here are my main skills:</h3>
          <HardSkills />
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={generateDelayedAnimations(2)}
        >
          <img src={images.RiahiRamiPic} alt={ROLE} />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
