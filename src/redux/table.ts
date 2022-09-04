import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateStartDeck, getRandomNumber } from '../helpers';
import { IChangeGameStateDispatchData, INextMoveOptionsDispatchData } from '../interfaces/gameController';
import { IPlayer } from '../interfaces/player';
import { IMulliganChoiceDispatchData, INextChoiceDispatchData } from '../interfaces/playerController';
import { IBattleGround, IGameInitData } from '../interfaces/table';

export interface ITableState {
  playersData: Record<number, IPlayer>;
  turnNumber: number;
  battleGround: IBattleGround;
}

const initialState: ITableState = {
  battleGround: { playersArmies: { 0: [], 1: [] } },
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
      mulliganChoice: {},
      nextChoice: {},
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
    addNextMoveOptions: (state, action: PayloadAction<INextMoveOptionsDispatchData>) => {
      const { cards, choiceType, playerID } = action.payload;
      state.playersData[playerID] = { ...state.playersData[playerID], nextMoveOptionsData: { cards, choiceType } };
    },
    changeGameState: (state, action: PayloadAction<IChangeGameStateDispatchData>) => {
      const { newPlayersHandData = {}, newBattleGroundData, newPlayersDeckData = {} } = action.payload;
      const player1Hand = newPlayersHandData[1] || state.playersData[1].hand;
      const player2Hand = newPlayersHandData[2] || state.playersData[2].hand;
      const player1Deck = newPlayersDeckData[1] || state.playersData[1].deck;
      const player2Deck = newPlayersDeckData[2] || state.playersData[2].deck;
      state.battleGround = newBattleGroundData || state.battleGround;
      state.playersData[1] = { ...state.playersData[1], deck: player1Deck, hand: player1Hand };
      state.playersData[2] = { ...state.playersData[2], deck: player2Deck, hand: player2Hand };
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
    },
  },
});

export default tableSlice.reducer;
export const { startGame, addNextMoveOptions, nextChoiceAction, changeGameState, mulliganChoiceAction } =
  tableSlice.actions;
