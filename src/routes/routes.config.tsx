import ProjectDetails from "components/ProjectDetails/ProjectDetails";
import { Projects } from "components/Projects/Projects";
import RouteObject from "models/RouteObject";
import { RouteIdEnum } from "utils/enum";

const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    element: <Projects />,
  },
  {
    path: RouteIdEnum.ProjectDetails,
    element: <ProjectDetails />,
  },
];
export default RoutesConfig;
