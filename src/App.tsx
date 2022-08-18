import React from 'react';

import { BoardCenterAreaContainer } from './containers/BoardCenterAreaContainer';
import { PlayerSectionContainer } from './containers/PlayerSectionContainer';

const App = () => {
  return (
    <div className="board-wrapper">
      <PlayerSectionContainer playerID={1} />
      <BoardCenterAreaContainer />
      <PlayerSectionContainer playerID={2} />
    </div>
  );
};

export default App;
