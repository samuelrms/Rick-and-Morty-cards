import { LoadingContainer } from "./styled";
import Lottie from "react-lottie";
import * as loadingAnimation from "../animations/loadingPortals.json";

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid cover",
    },
  };

  return (
    <LoadingContainer>
      <Lottie options={defaultOptions} height="100%" width="100%" />
    </LoadingContainer>
  );
};
