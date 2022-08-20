import { HandCard, IHandCard } from '../components/HandCard';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface IPlayerSection {
  playerID: number;
}

const PlayerHand = ({ playerID }: IPlayerSection): JSX.Element => {
  const { playersData } = useTypedSelector(state => state.table);
  const { hand = [] } = playersData[playerID];
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
