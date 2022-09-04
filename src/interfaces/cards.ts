export interface ICard {
  cardId: string;
  name: string;
  img: string;
}

export interface IGameCard extends ICard {
  hp?: number;
  attack?: number;
  sessionID: string;
}
