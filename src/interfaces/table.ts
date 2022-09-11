import { IGameCard } from './cards';
import { PlayerID } from './player';

export interface IGameInitData {
  players: {
    id: number;
    classTitle: string;
    deckTitle: string;
  }[];
}

export interface IBattleGround {
  playersArmies: Record<PlayerID, IGameCard[]>;
}
