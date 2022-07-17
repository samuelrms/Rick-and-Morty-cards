import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../services/api";
import { Card, IApp, Loading, Mobile } from "../../shared";
import { BackToHome, ContainerCard } from "./styled";

export const ListCards = () => {
  const [response, setResponse] = useState<IApp[]>();
  const [loading, setLoading] = useState<boolean>();
  const navigation = useNavigate();

  useEffect(() => {
    getPersonage();
  }, [response]);

  const getPersonage = async () => {
    try {
      const { data } = await url.get("/character");
      const { results } = data;
      if (results?.length > 0) {
        setResponse(results);
        setLoading(false);
      } else {
        setLoading(true);
      }
    } catch (err) {
      console.log("🚀 ~ file: App.tsx ~ line 11 ~ getPersonage ~ err", err);
    }
  };

  const handleCards = () => {
    navigation("/");
  };

  return (
    <ContainerCard>
      <BackToHome>
        <button onClick={handleCards}>⬅</button>
      </BackToHome>
      {loading ? (
        <Loading />
      ) : (
        response?.map((data, index) => {
          return <Card data={data} key={index} />;
        })
      )}
      {!loading && <Mobile />}
    </ContainerCard>
  );
};
