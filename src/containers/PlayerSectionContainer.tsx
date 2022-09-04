import { HeroInfo } from '../components/HeroInfo';
import { PlayerStats } from '../components/PlayerStats';
import { usePlayerController } from '../hooks/usePlayerController';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { PlayerHand } from './PlayerHand';

const PlayerSectionContainer = ({ playerID }: { playerID: number }): JSX.Element => {
  usePlayerController(playerID);
  const { playersData } = useTypedSelector(state => state.table);
  const { classTitle } = playersData[playerID];
  return (
    <div className={`player-section-container player-id-${playerID}`}>
      {classTitle ? (
        <>
          <HeroInfo playerID={playerID} />
          <PlayerHand playerID={playerID} />
          <PlayerStats playerID={playerID} />
        </>
      ) : null}
    </div>
  );
};

export { PlayerSectionContainer };
