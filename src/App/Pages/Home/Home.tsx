import { useNavigate } from "react-router-dom";
import { Mobile } from "../../shared";
import { HomeAnimation } from "../../shared/Components/Animation/Home/Home";
import { ContainerHome, ContentTextHome } from "./styled";

export const Home = () => {
  const navigation = useNavigate();

  const handleCards = () => {
    navigation("/cards");
  };
  return (
    <>
      <ContainerHome>
        <HomeAnimation />
        <ContentTextHome>
          <h1>Nesse site temos algumas curiosidades sobre Rick and Morty</h1>
          <button onClick={handleCards}>Ver curiosidades</button>
        </ContentTextHome>
      </ContainerHome>
      <Mobile />
    </>
  );
};
