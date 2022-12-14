import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { dummyCardsData } from '../data/dummyCardsData';
import { generateSimpleID, getRandomNumber } from '../helpers';
import { ChoicesTypes } from '../helpers/enums';
import { getAvailableMoves } from '../helpers/gameHelpers';
import { PlayerID } from '../interfaces/player';
import { addNextMoveOptions, changeGameState } from '../redux/table';

import { useTypedSelector } from './useTypedSelector';

export const useGameController = () => {
  const { battleGround, turnNumber, playersData, currentTurnPlayerID, lastMoveDoneTime } = useTypedSelector(
    state => state.table,
  );
  const dispatch = useDispatch();
  const {
    mulliganChoice: { isDone: player1MulliganDone },
  } = playersData[1];
  const {
    mulliganChoice: { isDone: player2MulliganDone },
  } = playersData[2];
  useEffect(() => {
    if (turnNumber === 0) {
      if (!player1MulliganDone && !player2MulliganDone) {
        Object.keys(playersData).forEach((key: PlayerID) => {
          const { hand, isPlayerTurn } = playersData[key];
          const playerHandCardsToReplace = isPlayerTurn ? hand : hand.slice(0, -1);
          dispatch(
            addNextMoveOptions({
              cards: playerHandCardsToReplace,
              choiceType: ChoicesTypes.Mulligan,
              playerID: key,
            }),
          );
        });
      } else if (player1MulliganDone && player2MulliganDone) {
        const newPlayersData: Record<string, any> = {};
        Object.keys(playersData).forEach((key: PlayerID) => {
          const {
            hand,
            isPlayerTurn,
            deck,
            mulliganChoice: { cardsIndexes },
          } = playersData[key];
          const deckAlreadyReplacedIndexes: Record<number, boolean> = {};
          const newHand = [...hand];
          const newDeck = [...deck];
          cardsIndexes.forEach((cardIndex: number) => {
            const findPlace = () => {
              const numberToReplace = getRandomNumber(0, deck.length - 1);
              if (!deckAlreadyReplacedIndexes[numberToReplace]) {
                const handCard = { ...newHand[cardIndex] };
                newHand[cardIndex] = { ...deck[numberToReplace] };
                newDeck[numberToReplace] = handCard;
                deckAlreadyReplacedIndexes[numberToReplace] = true;
              } else {
                findPlace();
              }
            };
            findPlace();
          });
          if (!isPlayerTurn) {
            newHand.push({ ...dummyCardsData.coin, sessionID: generateSimpleID() });
          }
          newPlayersData[key] = { deck: newDeck, hand: newHand };
        });
        dispatch(
          changeGameState({
            newPlayersData,
            turn: 1,
          }),
        );
      }
    }
  }, [turnNumber, player2MulliganDone, player1MulliganDone, currentTurnPlayerID]);

  useEffect(() => {
    if (currentTurnPlayerID) {
      const variants = getAvailableMoves({ currentPlayer: playersData[currentTurnPlayerID], battleGround });
      console.log('variants', variants);
    }
  }, [lastMoveDoneTime, currentTurnPlayerID]);
};
