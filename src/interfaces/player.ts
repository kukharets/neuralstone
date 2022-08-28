import { IDummyClassData } from '../data/dummyClassesData';

import { ICard, IHandCard } from './cards';

export interface IPlayer extends IDummyClassData {
  playerID?: 1 | 2;
  hp?: number;
  hand?: IHandCard[];
  deck?: ICard[];
  manaTotal?: number;
  manaLeft?: number;
  isPlayerTurn?: boolean;
}

export type IHand = IHandCard[];
