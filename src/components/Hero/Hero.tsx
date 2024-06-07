import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import Hello from "../../assets/Hello.gif";
import {
  EXPERIENCE,
  FULLNAME,
  GITHUB_LINK,
  LINKEDIN_LINK,
  ROLE,
} from "../../utils/constants";
import { AnimationType } from "../../utils/enum";
import { images } from "utils/images";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn={AnimationType.FadeInUp}>
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn={AnimationType.FadeInUp} delay={0.2 * 1000}>
          <h1>{FULLNAME}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn={AnimationType.FadeInUp} delay={0.4 * 1000}>
          <h3>{ROLE}</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn={AnimationType.FadeInUp} delay={0.6 * 1000}>
          <p className="small-resume">{EXPERIENCE}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn={AnimationType.FadeInUp} delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn={AnimationType.FadeInUp} delay={1 * 1000}>
          <div className="social-media">
            <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
              <img src={images.linkedinIcon} alt="Linkedin" />
            </a>
            <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
              <img src={images.githubIcon} alt="GitHub" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn={AnimationType.FadeInRight} delay={1 * 1000}>
          <img src={images.developerIllustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
