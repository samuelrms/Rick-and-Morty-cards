import { useEffect, useState } from "react";
import { url } from "./services/api";
import { Card, IApp } from "./shared";
import { Container, DeviceMobile } from "./styled";
import { GlobalStyle } from "./styles/GlobalStyled";
import Lottie from "react-lottie";
import { mortyAnimation } from "./shared/Card/components";

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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mortyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          response?.map((data, index) => {
            return <Card data={data} key={index} />;
          })
        )}
        <DeviceMobile>
          <Lottie options={defaultOptions} height="100%" width="100%" />
          <h1>Nosso Mobile ainda está sendo produzido através de um App</h1>
        </DeviceMobile>
      </Container>
    </>
  );
};
