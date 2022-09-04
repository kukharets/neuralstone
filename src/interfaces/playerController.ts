import { IPlayerChoice, PlayerID } from './player';

export interface INextChoiceDispatchData {
  choice: IPlayerChoice;
  playerID: PlayerID;
}

export interface IMulliganChoiceDispatchData {
  cardsToReplace: number[];
  playerID: PlayerID;
}
