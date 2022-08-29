import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BoardCenterAreaContainer } from './containers/BoardCenterAreaContainer';
import DeckBuilderContainer from './containers/DeckBuilderContainer';
import { PlayerSectionContainer } from './containers/PlayerSectionContainer';
import { useGameController } from './hooks/useGameController';
import { startGame } from './redux/table';

const App = () => {
  const dispatch = useDispatch();
  useGameController();
  useEffect(() => {
    dispatch(
      startGame({
        players: [
          { classTitle: 'druid', deckTitle: 'BeastDruid', id: 1 },
          { classTitle: 'warlock', deckTitle: 'ImpWarlock', id: 2 },
        ],
      }),
    );
  }, [dispatch]);

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
