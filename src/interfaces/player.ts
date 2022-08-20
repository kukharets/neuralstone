import { ICard, IHandCard } from './cards';

export interface IPlayer {
  playerID?: number;
  hp?: number;
  classTitle?: string;
  hand?: IHandCard[];
  deck?: ICard[];
  manaTotal?: number;
  manaLeft?: number;
  isPlayerTurn?: boolean;
}

export type IHand = [IHandCard];
