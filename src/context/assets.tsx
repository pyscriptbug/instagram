import { createContext } from "react";

export type ImagePaths = "iphone-with-profile.jpg" | "logo.png" | string ;

export type ImageProps = {
  [P in ImagePaths]?: string;
};

export interface AssetsContextInterface {
  images: ImageProps;
  addPaths: Function;
  getAvatar: (u: string) => string | undefined;
}

const AssetsContext = createContext({} as AssetsContextInterface);
export default AssetsContext;
