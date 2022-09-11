import { AllowedTargets, CardTypesByAction } from '../helpers/enums';

export interface ICard {
  cardId: string;
  type: string;
  name: string;
  img: string;
}

export interface IGameCard extends ICard {
  hp?: number;
  attack?: number;
  sessionID: string;
  type: string;
  additionalType?: CardTypesByAction;
  allowedTargets?: AllowedTargets;
  cost: number;
}
