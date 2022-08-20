import { HandCard } from '../components/HandCard';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IHandCard } from '../interfaces/cards';

const PlayerHand = ({ playerID }: { playerID: number }): JSX.Element => {
  const { playersData } = useTypedSelector(state => state.table);
  const { hand } = playersData[playerID];
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
