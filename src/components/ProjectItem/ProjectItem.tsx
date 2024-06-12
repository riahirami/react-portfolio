import React from "react";
import { Project } from "../../models/Project";
import { Container } from "./styles";
import { images } from "utils/images";
import { Link, useNavigate } from "react-router-dom";
import ProjectCardFooter from "components/ProjectCardFooter/ProjectCardFooter";
interface ProjectProps {
  project: Project;
}
const ProjectItem = ({ project }: ProjectProps) => {
  return (
    <Container id="projects">
      <div className="project" key={project.id}>
        <header>
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
        <Link
          to={`/project-details/${project.id}`}
          style={{ cursor: "pointer", textDecoration: "none", color: "white" }}
        >
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
        </Link>
        <ProjectCardFooter project={project} />
      </div>
    </Container>
  );
};

export default ProjectItem;
