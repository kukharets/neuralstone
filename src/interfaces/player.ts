import { IDummyClassData } from '../data/dummyClassesData';

import { ICard, IHandCard } from './cards';
import { IPlayerNextMoveOptions } from './gameController';

export interface IPlayer extends IDummyClassData {
  playerID?: number;
  hp: number;
  hand: IHandCard[];
  deck: ICard[];
  manaTotal: number;
  manaLeft: number;
  isPlayerTurn: boolean;
  nextMoveOptionsData: IPlayerNextMoveOptions | {};
}
