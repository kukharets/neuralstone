export interface IHandCard {
  cardID: number;
  cardTitle: string;
}
const HandCard = (data: IHandCard): JSX.Element => {
  const { cardTitle } = data;
  return <div className="hand-card">{cardTitle}</div>;
};

export { HandCard };
