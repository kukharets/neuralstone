import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateStartDeck, getRandomNumber } from '../helpers';
import { IChangeGameStateDispatchData, INextMoveOptionsDispatchData } from '../interfaces/gameController';
import { IPlayer, PlayerID } from '../interfaces/player';
import { IMulliganChoiceDispatchData, INextChoiceDispatchData } from '../interfaces/playerController';
import { IBattleGround, IGameInitData } from '../interfaces/table';

export interface ITableState {
  playersData: Record<PlayerID, IPlayer>;
  turnNumber: number;
  battleGround: IBattleGround;
  currentTurnPlayerID: PlayerID | null;
  lastMoveDoneTime: number;
}

const initialState: ITableState = {
  battleGround: { playersArmies: { 1: [], 2: [] } },
  currentTurnPlayerID: null,
  lastMoveDoneTime: 0,
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
      mulliganChoice: {},
      nextChoice: {},
      nextMoveOptionsData: {},
      playerID: '1',
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
      mulliganChoice: {},
      nextChoice: {},
      nextMoveOptionsData: {},
      playerID: '2',
    },
  },
  turnNumber: -1,
};

export const tableSlice = createSlice({
  initialState,
  name: 'table',
  reducers: {
    addNextMoveOptions: (state, action: PayloadAction<INextMoveOptionsDispatchData>) => {
      const { cards, choiceType, playerID } = action.payload;
      state.playersData[playerID] = { ...state.playersData[playerID], nextMoveOptionsData: { cards, choiceType } };
    },
    changeGameState: (state, action: PayloadAction<IChangeGameStateDispatchData>) => {
      const { newPlayersData = {}, newBattleGroundData, turn } = action.payload;
      Object.keys(newPlayersData).forEach((key: string) => {
        state.playersData[key] = { ...state.playersData[key], ...newPlayersData[key] };
      });
      state.battleGround = newBattleGroundData || state.battleGround;
      state.turnNumber = turn || state.turnNumber;
    },
    mulliganChoiceAction: (state, action: PayloadAction<IMulliganChoiceDispatchData>) => {
      const { playerID, cardsToReplace } = action.payload;
      state.playersData[playerID].mulliganChoice = { cardsIndexes: cardsToReplace, isDone: true };
    },
    nextChoiceAction: (state, action: PayloadAction<INextChoiceDispatchData>) => {
      const { playerID, choice } = action.payload;
      state.playersData[playerID].nextChoice = choice;
    },
    startGame: (state, action: PayloadAction<IGameInitData>) => {
      const { players } = action.payload;
      const firstTurnID = getRandomNumber(1, 2);

      players.forEach((playerInitData: { id: number; deckTitle: string; classTitle: string }) => {
        const { id, deckTitle, classTitle } = playerInitData;
        const isPlayerTurn = id === firstTurnID;
        const generatedDeckData = generateStartDeck({ classTitle, deckTitle, isPlayerTurn });
        state.playersData[id] = { ...state.playersData[id], ...generatedDeckData };
      });
      state.turnNumber = 0;
      state.currentTurnPlayerID = firstTurnID;
    },
  },
});

export default tableSlice.reducer;
export const { startGame, addNextMoveOptions, nextChoiceAction, changeGameState, mulliganChoiceAction } =
  tableSlice.actions;
