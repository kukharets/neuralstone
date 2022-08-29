import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateStartDeck } from '../helpers';
import { IChoiceDispatchData } from '../interfaces/gameController';
import { IPlayer } from '../interfaces/player';
import { IGameInitData } from '../interfaces/table';

export interface ITableState {
  playersData: Record<number, IPlayer>;
  turnNumber: number;
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
      nextMoveOptionsData: {},
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
      nextMoveOptionsData: {},
      playerID: 2,
    },
  },
  turnNumber: -1,
};

export const tableSlice = createSlice({
  initialState,
  name: 'table',
  reducers: {
    addChoice: (state, action: PayloadAction<IChoiceDispatchData>) => {
      const { cards, choiceType, playerID } = action.payload;
      state.playersData[playerID] = { ...state.playersData[playerID], nextMoveOptionsData: { cards, choiceType } };
    },
    startGame: (state, action: PayloadAction<IGameInitData>) => {
      const { players } = action.payload;
      const firstTurnID = Math.floor(Math.random() * 2) + 1;

      players.forEach((playerInitData: { id: number; deckTitle: string; classTitle: string }) => {
        const { id, deckTitle, classTitle } = playerInitData;
        const isPlayerTurn = id === firstTurnID;
        const generatedDeckData = generateStartDeck({ classTitle, deckTitle, isPlayerTurn });
        state.playersData[id] = { ...state.playersData[id], ...generatedDeckData };
      });
      state.turnNumber = 0;
    },
  },
});

export default tableSlice.reducer;
export const { startGame, addChoice } = tableSlice.actions;
