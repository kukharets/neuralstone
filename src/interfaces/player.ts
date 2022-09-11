import { IDummyClassData } from '../data/dummyClassesData';
import { ChoicesTypes } from '../helpers/enums';

import { IGameCard } from './cards';
import { IPlayerNextMoveOptions } from './gameController';

export interface IPlayerBasicChoice {
  choice: IGameCard;
  type: ChoicesTypes;
}

export interface IPlayerSpellChoice extends IPlayerBasicChoice {
  type: ChoicesTypes.Spell;
}

export interface IPlayerMoveToDeckChoice extends IPlayerBasicChoice {
  type: ChoicesTypes.MoveToDeck;
}

export type IPlayerChoice = IPlayerSpellChoice | IPlayerMoveToDeckChoice | Record<string, never>;

export type PlayerID = string | number;

export interface IPlayer extends IDummyClassData {
  playerID: PlayerID;
  hp: number;
  hand: IGameCard[];
  deck: IGameCard[];
  manaTotal: number;
  manaLeft: number;
  isPlayerTurn: boolean;
  nextMoveOptionsData: IPlayerNextMoveOptions | Record<string, never>;
  nextChoice: IPlayerChoice;
  mulliganChoice:
    | {
        isDone: boolean;
        cardsIndexes: number[];
      }
    | Record<string, never>;
}
