import React from "react";
import { DescriptionCard } from "./styled";
import { IDescription } from "../../../Interface/Interface";

export const Description = ({ children }: IDescription) => {
  return <DescriptionCard>{children}</DescriptionCard>;
};
