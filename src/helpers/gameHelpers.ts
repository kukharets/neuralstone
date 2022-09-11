import { IGameCard } from '../interfaces/cards';
import { IPlayer, PlayerID } from '../interfaces/player';
import { IBattleGround } from '../interfaces/table';

import { AllowedTargets, CardTypesByAction, CommonTypes } from './enums';

const getOpponentID = (selfID: PlayerID) => {
  return Number(selfID) === 1 ? 2 : 1;
};

export const getAvailableHandCardMoves = ({
  card,
  enemyArmy,
  selfArmy,
  manaLeft,
}: {
  card: IGameCard;
  enemyArmy: IGameCard[];
  selfArmy: IGameCard[];
  manaLeft: number;
}): any[] => {
  const availableMoves = [];
  if (card.cost <= manaLeft) {
    switch (card.additionalType) {
      case CardTypesByAction.TargetSpell:
        if (card.allowedTargets?.includes(AllowedTargets.SelfArmyCard)) {
          selfArmy.forEach(selfArmyCard => {
            availableMoves.push({
              initiator: card,
              target: selfArmyCard,
            });
          });
        }
        if (card.allowedTargets?.includes(AllowedTargets.EnemyArmyCard)) {
          enemyArmy.forEach(enemyArmyCard => {
            availableMoves.push({
              initiator: card,
              target: enemyArmyCard,
            });
          });
        }
        if (card.allowedTargets?.includes(AllowedTargets.SelfHero)) {
          availableMoves.push({
            initiator: card,
            target: CommonTypes.SelfHero,
          });
        }
        if (card.allowedTargets?.includes(AllowedTargets.EnemyHero)) {
          availableMoves.push({
            initiator: card,
            target: CommonTypes.EnemyHero,
          });
        }
        break;
      case CardTypesByAction.NonTargetSpell:
        availableMoves.push({
          initiator: card,
        });
        break;
      case CardTypesByAction.Minion:
        if (card.allowedTargets?.includes(AllowedTargets.SelfBattleField)) {
          availableMoves.push({
            initiator: card,
            target: CommonTypes.SelfBattleField,
          });
        }
        break;
      default: {
        console.warn(card);
        throw new Error('Invalid card type');
      }
    }
  }

  return availableMoves;
};

export const getAvailableBattleGroundCardMoves = ({
  card,
  enemyArmy,
  manaLeft,
}: {
  card: IGameCard;
  enemyArmy: IGameCard[];
  manaLeft: number;
}): any[] => {
  const availableMoves: any[] = [];
  if (card.cost <= manaLeft) {
    enemyArmy.forEach(enemyArmyCard => {
      availableMoves.push({
        initiator: card,
        target: enemyArmyCard,
      });
    });
    availableMoves.push({
      initiator: card,
      target: CommonTypes.EnemyHero,
    });
  }
  return availableMoves;
};

export const getAvailableMoves = ({
  currentPlayer,
  battleGround,
}: {
  currentPlayer: IPlayer;
  battleGround: IBattleGround;
}) => {
  const { hand, playerID, manaLeft } = currentPlayer;
  const enemyArmy = battleGround.playersArmies[getOpponentID(playerID)];
  const selfArmy = battleGround.playersArmies[playerID];
  const availableMoves: any[] = [];
  hand.forEach(card => {
    availableMoves.push(...getAvailableHandCardMoves({ card, enemyArmy, manaLeft, selfArmy }));
  });
  selfArmy.forEach(card => {
    availableMoves.push(...getAvailableBattleGroundCardMoves({ card, enemyArmy, manaLeft }));
  });
  return availableMoves;
};
