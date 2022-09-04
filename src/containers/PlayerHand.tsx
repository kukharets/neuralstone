import { HandCard } from '../components/HandCard';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IGameCard } from '../interfaces/cards';

const PlayerHand = ({ playerID }: { playerID: number }): JSX.Element => {
  const { playersData } = useTypedSelector(state => state.table);
  const { hand } = playersData[playerID];
  return (
    <div className="player-hand-container">
      <div className={`player-hand player-${playerID}`}>
        {hand.map((card: IGameCard, index) => (
          <HandCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export { PlayerHand };
