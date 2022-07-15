import { IImage } from "../../Interface/Interface";
import { ImageCard } from "./styled";

export const Image = ({ image, gender, name }: IImage) => {
  return <ImageCard src={image} alt={`${name} pertence ao gender ${gender}`} />;
};
