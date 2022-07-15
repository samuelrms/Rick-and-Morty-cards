import React from "react";
import { DescriptionCard } from "./styled";
import { ITitle } from "../../Interface/Interface";

export const Title = ({ children }: ITitle) => {
  return <DescriptionCard>{children}</DescriptionCard>;
};
