import React from 'react';
import { useDispatch } from 'react-redux';

import { BoardCenterAreaContainer } from './containers/BoardCenterAreaContainer';
import { PlayerSectionContainer } from './containers/PlayerSectionContainer';
import { initPlayer } from './redux/table';

const App = () => {
  const dispatch = useDispatch();
  dispatch(initPlayer({ classTitle: 'warlock', deck: new Array(4), hand: [], hp: 3, isPlayerTurn: true, playerID: 1 }));
  dispatch(
    initPlayer({ classTitle: 'hunter', deck: new Array(6), hand: [], hp: 30, isPlayerTurn: false, playerID: 2 }),
  );
  return (
    <div className="app-wrapper">
      <div className="board-wrapper">
        <PlayerSectionContainer playerID={1} />
        <BoardCenterAreaContainer />
        <PlayerSectionContainer playerID={2} />
      </div>
      <div className="bg-wrapper" />
    </div>
  );
};

export default App;
