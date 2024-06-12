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
import { generateDelayedAnimations } from "utils/helpers";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn={AnimationType.FadeInUp} initiallyVisible>
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={AnimationType.FadeInUp}
          delay={generateDelayedAnimations(1)}
          animateOnce
          initiallyVisible
        >
          <h1>{FULLNAME}</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={AnimationType.FadeInUp}
          delay={generateDelayedAnimations(1)}
          animateOnce
          initiallyVisible
        >
          <h3>{ROLE}</h3>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={AnimationType.FadeInUp}
          delay={generateDelayedAnimations(1)}
          animateOnce
          initiallyVisible
        >
          <p className="small-resume">{EXPERIENCE}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={AnimationType.FadeInUp}
          delay={generateDelayedAnimations(1)}
          animateOnce
          initiallyVisible
        >
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={AnimationType.FadeInUp}
          delay={generateDelayedAnimations(1)}
          animateOnce
          initiallyVisible
        >
          <div className="social-media">
            <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
              <img src={images.linkedinIcon} alt="Linkedin" />
            </a>
            <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
              <img
                src={images.githubIcon}
                alt="GitHub"
                width={30}
                height={30}
              />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation
          animateIn={AnimationType.FadeInRight}
          delay={generateDelayedAnimations(1)}
          animateOnce
          initiallyVisible
        >
          <img src={images.developerIllustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
