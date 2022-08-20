import { IDummyClassData } from '../data/dummyClassesData';

import { ICard, IHandCard } from './cards';

export interface IPlayer extends IDummyClassData {
  playerID?: number;
  hp?: number;
  hand?: IHandCard[];
  deck?: ICard[];
  manaTotal?: number;
  manaLeft?: number;
  isPlayerTurn?: boolean;
}

export interface IPlayerInitData {
  playerID: number;
  hp: number;
  hand?: IHandCard[];
  deck?: ICard[];
  isPlayerTurn: boolean;
  classTitle: string;
}

export type IHand = IHandCard[];
