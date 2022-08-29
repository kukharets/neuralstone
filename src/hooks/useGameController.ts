import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ChoicesTypes } from '../helpers/enums';
import { addChoice } from '../redux/table';

import { useTypedSelector } from './useTypedSelector';

export const useGameController = () => {
  const { turnNumber, playersData } = useTypedSelector(state => state.table);
  const dispatch = useDispatch();

  useEffect(() => {
    if (turnNumber === 0) {
      Object.keys(playersData).forEach((key: string) => {
        const { hand, isPlayerTurn } = playersData[Number(key)];
        const playerCardsToReplace = isPlayerTurn ? hand : hand.slice(0, -1);
        dispatch(addChoice({ cards: playerCardsToReplace, choiceType: ChoicesTypes.Mulligan, playerID: Number(key) }));
      });
    }
  }, [turnNumber]);
};
