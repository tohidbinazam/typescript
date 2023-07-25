import React from 'react';

export type info = {
  name: 'Tohid Bin Azam' | 'Tasnime Binta Azam' | 'Sopina Khtaun';
  age?: number;
  isMarried?: boolean;
  children: React.ReactNode;
  food?: (string | number)[] | null;
  dev?: { name: string; age: number; skill: boolean } | null;
  color?: Color;
};

export enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}
export type params = {
  event: React.MouseEvent<HTMLButtonElement>;
  id: number;
};

export type button = {
  name: string;
  style: React.CSSProperties;
  children: React.ReactNode;
  click: (params: params) => void;
  user: user;
  setUser: React.Dispatch<React.SetStateAction<user>>;
};
export type user = {
  name: string;
  age: number;
}[];
