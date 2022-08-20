import { PlayerIcon } from '../components/PlayerIcon';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { PlayerHand } from './PlayerHand';

interface IPlayerSection {
  playerID: number;
}

const PlayerSectionContainer = ({ playerID }: IPlayerSection): JSX.Element => {
  const { playersData } = useTypedSelector(state => state.table);
  const { hp, classTitle } = playersData[playerID];
  return (
    <div className={`player-section-container player-id-${playerID}`}>
      <PlayerIcon classTitle={classTitle} />
      <PlayerHand playerID={playerID} />
      <div className="player-hp">{hp}</div>
    </div>
  );
};

export { PlayerSectionContainer };
