import { ChoicesTypes } from '../helpers/enums';

import { IGameCard } from './cards';
import { IBattleGround } from './table';

export interface INextMoveOptionsDispatchData {
  cards: IGameCard[];
  playerID: number;
  choiceType: ChoicesTypes;
}

export interface IPlayerNextMoveOptions {
  choiceType: ChoicesTypes;
  cards: IGameCard[];
}

export interface IChangeGameStateDispatchData {
  newBattleGroundData?: IBattleGround;
  newPlayersHandData?: Record<number, IGameCard[]>;
  newPlayersDeckData?: Record<number, IGameCard[]>;
}
