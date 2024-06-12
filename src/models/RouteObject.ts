import { ReactElement } from "react";
import { RouteIdEnum } from "utils/enum";

export default interface RouteObject {
  id?: number;
  path: RouteIdEnum;
  element?: ReactElement;
  children?: RouteObject[];
}
