import { dummyClassesData } from '../data/dummyClassesData';
import { IPlayer } from '../interfaces/player';

const PlayerIcon = ({ classTitle = '', isPlayerTurn }: IPlayer): JSX.Element => {
  const classIcon = dummyClassesData[classTitle]?.icon;
  return (
    <div className={`player-icon ${isPlayerTurn ? 'active' : ''}`}>
      <img alt={classTitle} src={classIcon} />
    </div>
  );
};

export { PlayerIcon };
