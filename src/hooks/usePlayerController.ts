import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRandomBoolean } from '../helpers';
import { deferredDispatch } from '../helpers/deferredDispatch';
import { ChoicesTypes } from '../helpers/enums';
import { mulliganChoiceAction } from '../redux/table';

import { useTypedSelector } from './useTypedSelector';

export const usePlayerController = (playerID: number) => {
  const { playersData } = useTypedSelector(state => state.table);
  const { nextMoveOptionsData } = playersData[playerID];
  const dispatch = useDispatch();
  useEffect(() => {
    const { cards, choiceType } = nextMoveOptionsData;
    if (Object.keys(nextMoveOptionsData).length) {
      switch (choiceType) {
        case ChoicesTypes.Mulligan:
          const cardsToReplace: number[] = [];
          cards.forEach((card, index) => {
            if (getRandomBoolean()) {
              cardsToReplace.push(index);
            }
          });
          deferredDispatch(mulliganChoiceAction({ cardsToReplace, playerID }), dispatch);
          break;
        default: {
          throw new Error('Bad choice type');
        }
      }
    }
  }, [nextMoveOptionsData]);
};
