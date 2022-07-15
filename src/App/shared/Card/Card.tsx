import React from "react";
import { Description, Image, Title } from "../Components";
import { ICard } from "../Interface/Interface";
import { Container } from "./styled";

export const Card = ({ data }: ICard) => {
  return (
    <Container>
      <Title>{data?.name}</Title>
      <Image image={data?.image} gender={data?.gender} name={data?.name} />
      <Description>{data?.species}</Description>
      <Description>
        {data?.origin?.name === "Earth (Replacement Dimension)"
          ? "Earth"
          : data?.origin?.name}
      </Description>
    </Container>
  );
};
