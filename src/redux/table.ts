import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDummyClassData } from '../data/dummyClassesData';
import { generatePlayerStartHand, getClassData, getShuffledDeck } from '../helpers';
import { IPlayer } from '../interfaces/player';
import { IGameInitData } from '../interfaces/table';

export interface ITableState {
  playersData: Record<1 | 2, IPlayer>;
}

const initialState: ITableState = {
  playersData: {
    1: {
      classTitle: '',
      deck: [],
      hand: [],
      heroIcon: '',
      heroPowerCost: 0,
      heroPowerIcon: '',
      hp: 0,
      isPlayerTurn: false,
      manaLeft: 1,
      manaTotal: 1,
      playerID: 1,
    },
    2: {
      classTitle: '',
      deck: [],
      hand: [],
      heroIcon: '',
      heroPowerCost: 0,
      heroPowerIcon: '',
      hp: 0,
      isPlayerTurn: false,
      manaLeft: 1,
      manaTotal: 1,
      playerID: 2,
    },
  },
};

export const tableSlice = createSlice({
  initialState,
  name: 'table',
  reducers: {
    startGame: (state, action: PayloadAction<IGameInitData>) => {
      const { players } = action.payload;
      const firstTurnID = Math.floor(Math.random() * 2) + 1;
      const newPlayers = { 1: {}, 2: {} };
      players.forEach((playerInitData: { id: 1 | 2; deckTitle: string; classTitle: string }) => {
        const { id, deckTitle, classTitle } = playerInitData;
        const deck = getShuffledDeck(deckTitle);
        const isPlayerTurn = id === firstTurnID;
        const hand = generatePlayerStartHand(deck, isPlayerTurn);
        const classData: IDummyClassData = getClassData(classTitle);
        newPlayers[id] = { ...state.playersData[id], ...classData, deck, hand, isPlayerTurn };
      });

      state.playersData = newPlayers;
    },
  },
});

export default tableSlice.reducer;
export const { startGame } = tableSlice.actions;
