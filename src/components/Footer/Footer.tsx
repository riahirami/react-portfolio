import { Container } from "./styles";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github-icon.svg";

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>Copyrights 2024</p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/rami-riahi/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/riahirami" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}
