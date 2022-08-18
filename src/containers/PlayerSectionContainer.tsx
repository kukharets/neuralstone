interface IPlayerSection {
  playerID: number;
}

const PlayerSectionContainer = ({ playerID }: IPlayerSection): JSX.Element => {
  return <div className={`player-section-container player-id-${playerID}`} />;
};

export { PlayerSectionContainer };
