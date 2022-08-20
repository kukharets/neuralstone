import { HandCard } from '../components/HandCard';
import { IHandCard } from '../interfaces/cards';
import { IPlayer } from '../interfaces/player';

const PlayerHand = ({ hand }: IPlayer): JSX.Element => {
  return (
    <div className="player-hand-container">
      <div className="player-hand">
        {hand?.map((card: IHandCard) => (
          <HandCard {...card} />
        ))}
      </div>
    </div>
  );
};

export { PlayerHand };
