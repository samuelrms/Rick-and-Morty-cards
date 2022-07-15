import React from "react";
import { ICard } from "../Interface/Interface";
import { Description, Image, Title } from "./components";
import {
  Container,
  ContentFooterCard,
  ContentHeaderCard,
  ContentText,
} from "./styled";

export const Card = ({ data }: ICard) => {
  return (
    <Container>
      <Image image={data?.image} gender={data?.gender} name={data?.name} />
      <ContentText>
        <ContentHeaderCard>
          <Title>{data?.name}</Title>
          <Description>{data?.species}</Description>
        </ContentHeaderCard>
        <ContentFooterCard>
          <Description>
            {data?.origin?.name === "Earth (Replacement Dimension)"
              ? "Earth"
              : data?.origin?.name}
          </Description>
          <Description>{data?.gender}</Description>
        </ContentFooterCard>
      </ContentText>
    </Container>
  );
};
