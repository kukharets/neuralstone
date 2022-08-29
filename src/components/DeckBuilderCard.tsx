const DeckBuilderCard = ({
  data = {},
  removeCard,
  addCard,
  isCurrentCard = false,
  isAllowToAdd = false,
  isAllowToRemove = false,
  handleSelect = () => {},
  quantity = 0,
}: {
  data: Record<any, any>;
  removeCard?: (cardId: number) => void;
  addCard?: (cardData: Record<any, any>) => void;
  isCurrentCard?: boolean;
  isAllowToAdd?: boolean;
  isAllowToRemove?: boolean;
  handleSelect?: () => void;
  quantity?: number;
}): JSX.Element => {
  const { cardId, img = 0, quantity: decksCardsQuantity } = data;
  const cardQuantity = quantity || decksCardsQuantity;
  return (
    <div className={`deck-builder-card ${isCurrentCard ? 'current' : 'list'}`} onClick={handleSelect}>
      {!!cardQuantity && <span className="quantity">{cardQuantity}</span>}
      <span className="deck-card-hover-hint">
        {removeCard && isAllowToRemove && (
          <span
            className="control-icon remove"
            onClick={e => {
              e.stopPropagation();
              removeCard(cardId);
            }}
          />
        )}{' '}
        {addCard && isAllowToAdd && (
          <span
            className="control-icon add"
            onClick={e => {
              e.stopPropagation();
              addCard(data);
            }}
          />
        )}
      </span>
      <img alt="deck-card" src={img} />
    </div>
  );
};

export { DeckBuilderCard };
