import { PlayerIcon } from '../components/PlayerIcon';
import { PlayerStats } from '../components/PlayerStats';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IPlayer } from '../interfaces/player';

import { PlayerHand } from './PlayerHand';

const PlayerSectionContainer = ({ playerID = 1 }: IPlayer): JSX.Element => {
  const { playersData } = useTypedSelector(state => state.table);
  const { hp, hand, deck, classTitle = '', manaLeft, manaTotal, isPlayerTurn = false } = playersData[playerID];
  return (
    <div className={`player-section-container player-id-${playerID}`}>
      <PlayerIcon classTitle={classTitle} isPlayerTurn={isPlayerTurn} />
      <PlayerHand hand={hand} />
      <PlayerStats deck={deck} hp={hp} manaLeft={manaLeft} manaTotal={manaTotal} />
    </div>
  );
};

export { PlayerSectionContainer };
