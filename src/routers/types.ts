export enum Suits {
  Spades = "Spades",
  Hearts = "Hearts",
  Diamonds = "Diamonds",
  Clubs = "Clubs",
}

export enum Ranks {
  Ace = "A",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Ten = "10",
  Jack = "J",
  Queen = "Q",
  King = "K",
}

export interface Card {
  rank: Ranks;
  suit: Suits;
  code: string;
  text: string;
  symbol: string;
}

export type DrawQuery = {
  suit?: string;
  min?: string;
  max?: string;
};

export type FlipDraw = {
  a?: string;
  b?: string;
};
