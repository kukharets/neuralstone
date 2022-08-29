import { useTypedSelector } from '../hooks/useTypedSelector';

const HeroInfo = ({ playerID }: { playerID: number }): JSX.Element => {
  const { playersData } = useTypedSelector(state => state.table);
  const { classTitle = '', heroIcon, heroPowerIcon, isPlayerTurn = false, heroPowerCost } = playersData[playerID];
  return (
    <div className={`player-icon-wrapper ${isPlayerTurn ? 'active' : ''}`}>
      {classTitle}
      <div className="player-icon">
        <div className="hero-power-img-wrapper">
          <img alt="player-hero-power-icon" src={heroPowerIcon} />
        </div>
        <span>{heroPowerCost}</span>
      </div>
      <div className="playerHeroImg" style={{ backgroundImage: `url(${heroIcon})` }} />
    </div>
  );
};

export { HeroInfo };
