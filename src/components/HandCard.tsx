import { IHandCard } from '../interfaces/cards';

const HandCard = (data: IHandCard): JSX.Element => {
  const { img } = data;
  return (
    <div className="hand-card-wrapper">
      <div className="hand-card" style={{ backgroundImage: `url(${img})` }} />
    </div>
  );
};

export { HandCard };
