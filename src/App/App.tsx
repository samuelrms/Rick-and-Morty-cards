import { useEffect, useState } from "react";
import { url } from "./services/api";
import { Card, IApp, Loading, Mobile } from "./shared";
import { Container } from "./styled";
import { GlobalStyle } from "./styles/GlobalStyled";

export const App = () => {
  const [response, setResponse] = useState<IApp[]>();
  const [loading, setLoading] = useState<boolean>();

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

  return (
    <>
      <GlobalStyle />
      <Container>
        {loading ? (
          <Loading />
        ) : (
          response?.map((data, index) => {
            return <Card data={data} key={index} />;
          })
        )}
        {loading && <Mobile />}
      </Container>
    </>
  );
};
