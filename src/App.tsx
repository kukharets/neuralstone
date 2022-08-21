import React from 'react';
import { useDispatch } from 'react-redux';

import { BoardCenterAreaContainer } from './containers/BoardCenterAreaContainer';
import DeckBuilderContainer from './containers/DeckBuilderContainer';
import { PlayerSectionContainer } from './containers/PlayerSectionContainer';
import { initPlayer } from './redux/table';

const App = () => {
  const dispatch = useDispatch();
  dispatch(initPlayer({ classTitle: 'warlock', deck: new Array(4), hand: [], hp: 3, isPlayerTurn: true, playerID: 1 }));
  dispatch(
    initPlayer({ classTitle: 'hunter', deck: new Array(6), hand: [], hp: 30, isPlayerTurn: false, playerID: 2 }),
  );
  // No reasons to adding react-router for 1 page
  const isDeckBuildAdminConsolePage = window.location.pathname === '/deckbuild/';
  return (
    <div className="app-wrapper">
      <div className="board-wrapper">
        {!isDeckBuildAdminConsolePage ? (
          <>
            <PlayerSectionContainer playerID={1} />
            <BoardCenterAreaContainer />
            <PlayerSectionContainer playerID={2} />
          </>
        ) : (
          <DeckBuilderContainer />
        )}
      </div>
      <div className="bg-wrapper" />
    </div>
  );
};

export default App;
