import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { PROJECTS } from "../../utils/constants";
import ProjectItem from "../ProjectItem/ProjectItem";

export function Projects() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {PROJECTS.map((item, index) => (
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            key={index}
            duration={2.5}
          >
            <ProjectItem project={item} />
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
