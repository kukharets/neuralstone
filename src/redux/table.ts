import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlayer } from '../interfaces/player';

export interface ITableState {
  playersData: Record<number, IPlayer>;
}

const initialState: ITableState = {
  playersData: {
    1: {
      classTitle: '',
      deck: [],
      hand: [],
      hp: 0,
      isPlayerTurn: false,
      manaLeft: 2,
      manaTotal: 4,
      playerID: 1,
    },
    2: {
      classTitle: '',
      deck: [],
      hand: [],
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
    initPlayer: (state, action: PayloadAction<{ playerID: number; playerData: IPlayer }>) => {
      const { playerID, playerData } = action.payload;
      state.playersData = { ...state.playersData, [playerID]: { ...state.playersData[playerID], ...playerData } };
    },
  },
});

export default tableSlice.reducer;
export const { initPlayer } = tableSlice.actions;
