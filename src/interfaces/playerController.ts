import { IPlayerChoice } from './player';

export interface INextChoiceDispatchData {
  choice: IPlayerChoice;
  playerID: number;
}

export interface IMulliganChoiceDispatchData {
  cardsToReplace: number[];
  playerID: number;
}
