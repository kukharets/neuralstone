import { IGameCard } from './cards';

export interface IGameInitData {
  players: {
    id: number;
    classTitle: string;
    deckTitle: string;
  }[];
}

export interface IBattleGround {
  playersArmies: Record<number, IGameCard[]>;
}
