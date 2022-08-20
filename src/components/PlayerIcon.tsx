import { dummyClassesData } from '../data/dummyClassesData';

export interface IPlayerIcon {
  classTitle: string;
}
const PlayerIcon = ({ classTitle }: IPlayerIcon): JSX.Element => {
  const classIcon = dummyClassesData[classTitle]?.icon;
  return (
    <div className="player-icon">
      <img alt={classTitle} src={classIcon} />
    </div>
  );
};

export { PlayerIcon };
