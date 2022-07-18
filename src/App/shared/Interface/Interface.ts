import React from "react";

export interface IListCards {
  id?: number;
  image: string;
  name: string;
  species?: string;
  gender: string;
  origin?: {
    name: string;
    url?: string;
  };
  status?: string;
}

export interface IImage {
  image?: string;
  name?: string;
  gender?: string;
}

export interface IDescription {
  children: React.ReactNode;
}

export interface ITitle {
  children: React.ReactNode;
}

export interface ICard {
  data?: {
    image?: string;
    name?: string;
    species?: string;
    gender?: string;
    origin?: {
      name?: string;
      url?: string;
    };
    status?: string;
  };
}
