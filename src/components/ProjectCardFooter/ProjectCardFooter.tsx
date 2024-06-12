import { Project } from "models/Project";
import React from "react";
import { Container } from "./styles";

interface ProjectCardFooterProps {
  project: Project;
  detailsScreen?: boolean;
}
const ProjectCardFooter = ({
  project,
  detailsScreen = false,
}: ProjectCardFooterProps) => {
  const technologiesMargin = detailsScreen ? "0.5rem" : 0;
  return (
    <Container>
      <footer>
        <ul
          className="tech-list"
          style={{ flexWrap: "wrap", justifyContent: "space-around" }}
        >
          {project.technologies.map((tech, index) => (
            <li
              key={index}
              className="tech-item"
              style={{
                margin: technologiesMargin,
              }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </Container>
  );
};

export default ProjectCardFooter;
