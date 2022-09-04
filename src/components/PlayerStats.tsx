import { useTypedSelector } from '../hooks/useTypedSelector';
import { PlayerID } from '../interfaces/player';
import deckIcon from '../media/deck.png';
import heartIcon from '../media/hp.svg';
import manaIcon from '../media/mana.png';

const PlayerStats = ({ playerID }: { playerID: PlayerID }): JSX.Element => {
  const { playersData } = useTypedSelector(state => state.table);
  const { hp = 0, deck, manaTotal, manaLeft } = playersData[playerID];
  return (
    <div className="player-stats-wrapper">
      <div>
        <img alt="hp" src={heartIcon} />
        <span className={`player-hp ${hp < 30 ? 'red' : 'green'}`}>{hp}</span>
      </div>
      <div>
        <img alt="deckLeft" src={deckIcon} />
        <span>{deck?.length}</span>
      </div>
      <div className="mana-section">
        <img alt="mana" src={manaIcon} />
        <span>{`${manaLeft}|${manaTotal}`}</span>
      </div>
    </div>
  );
};

export { PlayerStats };
