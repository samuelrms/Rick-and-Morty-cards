import { useEffect, useState } from "react";
import { url } from "./services/api";
import { Container } from "./styled";
import { GlobalStyle } from "./styles/GlobalStyled";

interface IApp {
  id?: number;
  image: string;
  name: string;
  species?: string;
  gender?: string;
  origin?: {
    name: string;
    url?: string;
  };
  status?: string;
}

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
          <h1>Loading...</h1>
        ) : (
          response?.map((data, index) => {
            return (
              <div key={index}>
                <h1>{data?.name}</h1>
                <img
                  src={data?.image}
                  alt={`${data?.name} pertence ao gender ${data?.gender}`}
                />
                {data?.species && <h2>Especie {data?.species}</h2>}
                {data?.status && (
                  <h2>
                    Status{" "}
                    {(data?.status === "unknown" && "desconhecido") ||
                      (data?.status === "Dead" && "morto") ||
                      (data?.status === "Alive" && "vivo") ||
                      data?.status}
                  </h2>
                )}
                {data?.origin && (
                  <h2>
                    Origem{" "}
                    {data?.origin?.name === "unknown"
                      ? "desconhecida"
                      : data?.origin?.name}
                  </h2>
                )}
              </div>
            );
          })
        )}
      </Container>
    </>
  );
};
