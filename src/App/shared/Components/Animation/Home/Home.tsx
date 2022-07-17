import { AnimationHome } from "./styled";
import Lottie from "react-lottie";
import * as mortyAnimation from "../animations/mortyHome.json";

export const HomeAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mortyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid cover",
    },
  };

  return (
    <AnimationHome>
      <Lottie options={defaultOptions} height="300px" width="100%" />
    </AnimationHome>
  );
};
