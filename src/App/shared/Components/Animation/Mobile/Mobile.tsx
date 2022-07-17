import { DeviceMobile } from "./styled";
import Lottie from "react-lottie";
import * as sadMortyAnimation from "../animations/sadMortyAnimation.json";

export const Mobile = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sadMortyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <DeviceMobile>
      <Lottie options={defaultOptions} height="100%" width="100%" />
      <h1>Nosso Mobile ainda está sendo produzido através de um App</h1>
    </DeviceMobile>
  );
};
