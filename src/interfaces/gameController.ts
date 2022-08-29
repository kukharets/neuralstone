import { ChoicesTypes } from '../helpers/enums';

import { IGameCard } from './cards';

export interface IChoiceDispatchData {
  cards: IGameCard[];
  playerID: number;
  choiceType: ChoicesTypes;
}

export interface IPlayerNextMoveOptions {
  choiceType: ChoicesTypes;
  cards: IGameCard[];
}
