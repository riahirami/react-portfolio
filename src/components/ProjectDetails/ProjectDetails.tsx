import ProjectCardFooter from "components/ProjectCardFooter/ProjectCardFooter";
import { useParams } from "react-router-dom";
import { PROJECTS } from "utils/constants";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { images } from "utils/images";

const ProjectDetails = () => {
  const { id } = useParams();

  const projectData = PROJECTS.find(
    (project) => id && project.id === parseInt(id)
  );

  return (
    <Container>
      <div className="header">
        <h3>{projectData?.name}</h3>
        <Link to="/">
          <img
            className="goBackIcon"
            src={images.goBackIcon}
            width={25}
            height={25}
            alt="Go back"
          />
        </Link>
      </div>
      <img src={projectData?.image} alt={projectData?.name} />
      <p className="description">{projectData?.description}</p>
      <p> Used technologies : </p>
      {projectData && <ProjectCardFooter project={projectData} detailsScreen />}
      <div className="links">
        {projectData?.github && (
          <p>
            Github :<a href={projectData?.github}> {projectData?.github}</a>
          </p>
        )}
        {projectData?.isDeployed && (
          <p>
            Demo :<a href={projectData?.link}> {projectData?.link}</a>
          </p>
        )}
      </div>
    </Container>
  );
};

export default ProjectDetails;
