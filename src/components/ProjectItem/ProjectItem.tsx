import React from "react";
import { Project } from "../../models/Project";
import { Container } from "./styles";
import { images } from "utils/images";
interface ProjectProps {
  project: Project;
}
const ProjectItem = ({ project }: ProjectProps) => {
  return (
    <Container id="projects">
      <div className="project">
        <header>
          {/* <img src={folderIcon} alt="folderIcon" width={30} height={30} /> */}
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer">
              <img
                src={images.githubIcon}
                alt="Visit site"
                width={30}
                height={30}
              />
            </a>
            {project.isDeployed && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={images.externalLink}
                  alt="Visit site"
                  width={30}
                  height={30}
                />
              </a>
            )}
          </div>
        </header>
        <div className="body">
          <h3>{project.name}</h3>
          <img
            src={project.image}
            alt={project.name}
            width={350}
            height={200}
          />
          <p className="truncate-description">{project.description}</p>
        </div>
        <footer>
          <ul className="tech-list">
            {project.technologies.map((tech, index) => (
              <li key={index} className="tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </Container>
  );
};

export default ProjectItem;
