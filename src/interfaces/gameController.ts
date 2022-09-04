import { ChoicesTypes } from '../helpers/enums';

import { IGameCard } from './cards';
import { PlayerID } from './player';
import { IBattleGround } from './table';

export interface INextMoveOptionsDispatchData {
  cards: IGameCard[];
  playerID: PlayerID;
  choiceType: ChoicesTypes;
}

export interface IPlayerNextMoveOptions {
  choiceType: ChoicesTypes;
  cards: IGameCard[];
}

export interface IChangeGameStateDispatchData {
  newBattleGroundData?: IBattleGround;
  newPlayersData?: Record<PlayerID, { deck?: IGameCard[]; hand?: IGameCard[] }>;
  turn?: number;
}
