import React from 'react';
import { useDispatch } from 'react-redux';

import { BoardCenterAreaContainer } from './containers/BoardCenterAreaContainer';
import { PlayerSectionContainer } from './containers/PlayerSectionContainer';
import { initPlayer } from './redux/table';

const App = () => {
  const dispatch = useDispatch();
  dispatch(initPlayer({ playerData: { classTitle: 'warlock', hand: [], hp: 30 }, playerID: 1 }));
  return (
    <div className="board-wrapper">
      <PlayerSectionContainer playerID={1} />
      <BoardCenterAreaContainer />
      <PlayerSectionContainer playerID={2} />
    </div>
  );
};

export default App;
