import { IHandCard } from '../interfaces/cards';

const HandCard = (data: IHandCard): JSX.Element => {
  const { cardTitle } = data;
  return <div className="hand-card">{cardTitle}</div>;
};

export { HandCard };
