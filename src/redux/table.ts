import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IHandCard } from '../components/HandCard';

export interface IPlayerState {
  hp: number;
  classTitle: string;
  hand: [IHandCard] | [];
}

export interface ITableState {
  playersData: Record<number, IPlayerState>;
}

const initialState: ITableState = {
  playersData: {
    1: {
      classTitle: '',
      hand: [],
      hp: 0,
    },
    2: {
      classTitle: '',
      hand: [],
      hp: 0,
    },
  },
};

export const tableSlice = createSlice({
  initialState,
  name: 'table',
  reducers: {
    initPlayer: (state, action: PayloadAction<{ playerID: number; playerData: IPlayerState }>) => {
      const { playerID, playerData } = action.payload;
      state.playersData = { ...state.playersData, [playerID]: playerData };
    },
  },
});

export default tableSlice.reducer;
export const { initPlayer } = tableSlice.actions;
