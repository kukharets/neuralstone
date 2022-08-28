import axios from 'axios';
import React, { useMemo, useState } from 'react';

import { DeckBuilderCard } from '../components/DeckBuilderCard';

const apiCardDataRequest = (cardName = '') => {
  const options = {
    headers: {
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '41f3aa12b1msha1c543f14404c9cp1cdccfjsn9f66ea547c0b',
    },
    method: 'GET',
    params: { collectible: '1' },
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`,
  };

  return axios.request(options);
};

const checkIfCardIsAllowToRemove = (card: Record<any, any>, deck: Record<any, any>[]) => {
  const { cardId } = card;
  const currentCardsOfThisIDLength = deck.filter(el => el.cardId === cardId).length;
  return currentCardsOfThisIDLength > 0;
};

const checkIfCardIsAllowToAdd = (card: Record<any, any>, deck: Record<any, any>[], cardsLength: number) => {
  const newDeck = [...deck];
  const { rarity, cardId } = card;
  const cardQuantityLimit = rarity === 'Legendary' ? 1 : 2;
  const currentCardsOfThisIDLength = newDeck.find(el => el.cardId === cardId)?.quantity || 0;
  return currentCardsOfThisIDLength < cardQuantityLimit && cardsLength < 30;
};
const DeckBuilderContainer = () => {
  const [searchText, setSearchText] = useState('');
  // @ts-ignore
  const [deckCards, setDeckCards] = useState<any[]>(JSON.parse(localStorage.getItem('lastDeck')) || []);
  const [selectedCard, setSelectedCard] = useState<Record<any, any>>({});
  const [error, setError] = useState('');
  const [deckTitle, setDeckTitle] = useState('');

  const handleLoadDeck = () => {
    // @ts-ignore
    setDeckCards(JSON.parse(localStorage.getItem(deckTitle)) || []);
  };

  const handleInputSubmit = () => {
    setSelectedCard({});
    apiCardDataRequest(searchText)
      .then(json => {
        setError('');
        setSelectedCard(json.data[0]);
      })
      .catch(searchError => setError(searchError?.message));
    setSearchText('');
  };
  const handleDeckSubmit = () => {
    // fse.writeFile(`src/data/${deckTitle}json`, JSON.stringify(deckCards, null, 4), 'utf8', () => {
    //   console.log('An error occured while writing JSON Object to File.');
    // });
    localStorage.setItem(deckTitle, JSON.stringify(deckCards));
  };

  const cardsLength = useMemo(() => {
    let i = 0;
    deckCards.forEach(card => {
      if (card.quantity === 2) {
        i += 2;
      } else {
        i += 1;
      }
    });
    return i;
  }, [deckCards]);

  const isAllowToAddSelectedCard = checkIfCardIsAllowToAdd(selectedCard, deckCards, cardsLength);
  const isAllowToRemoveSelectedCard = checkIfCardIsAllowToRemove(selectedCard, deckCards);

  const handleAddCard = (data: Record<any, any>) => {
    if (isAllowToAddSelectedCard && cardsLength < 30) {
      const index = deckCards.findIndex(card => card.cardId === data.cardId);
      const newCards = [...deckCards];
      if (index > -1) {
        newCards[index] = { ...newCards[index], quantity: 2 };
      } else {
        newCards.push({ ...data, quantity: 1 });
      }
      setDeckCards(newCards);
      localStorage.setItem('lastDeck', JSON.stringify(newCards));
    }
  };

  const handleRemoveCard = (removeCardId: number) => {
    const newCards = [...deckCards];
    const index = newCards.findIndex(card => {
      return card.cardId === removeCardId;
    });
    if (index > -1) {
      const currentQuantity = newCards[index].quantity || 1;
      if (currentQuantity === 1) {
        newCards.splice(index, 1);
      } else if (currentQuantity === 2) {
        newCards[index] = { ...newCards[index], quantity: 1 };
      }
      setDeckCards(newCards);
    }
  };
  const selectedCardQuantity = deckCards.filter(card => card.cardId === selectedCard.cardId)[0]?.quantity;

  console.log('selectedCard', selectedCard);
  return (
    <div className="app-wrapper">
      <div className="board-wrapper">
        <div className="deck-builder-wrapper">
          <div className="card-search-input-wrapper">
            <div className="card-search-input">
              <span className="input-label">Card Name</span>
              <input
                autoComplete="on"
                id="card-search-input"
                type="searchText"
                value={searchText}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchText(e?.currentTarget?.value || '')}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    handleInputSubmit();
                  }
                }}
              />
              <button className="search-card-button" onClick={handleInputSubmit}>
                Search
              </button>
              {selectedCard.cardId && (
                <DeckBuilderCard
                  isCurrentCard
                  addCard={handleAddCard}
                  data={selectedCard}
                  isAllowToAdd={isAllowToAddSelectedCard}
                  isAllowToRemove={isAllowToRemoveSelectedCard}
                  quantity={selectedCardQuantity}
                  removeCard={handleRemoveCard}
                />
              )}
            </div>
            {error && <span className="card-search-error">{error}</span>}
          </div>
          {!!deckCards.length && (
            <div className="deck-cards-wrapper">
              <div className="cards-length">{cardsLength} / 30</div>
              <div className="deck-cards-list">
                {deckCards.map(card => (
                  <DeckBuilderCard
                    addCard={() => handleAddCard(card)}
                    data={card}
                    isAllowToAdd={checkIfCardIsAllowToAdd(card, deckCards, cardsLength)}
                    isAllowToRemove={checkIfCardIsAllowToRemove(card, deckCards)}
                    removeCard={handleRemoveCard}
                    handleSelect={() => {
                      setSelectedCard(card);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="deck-controls">
            <span className="input-label">Deck Title</span>
            <input
              id="deck-name"
              type="searchText"
              value={deckTitle}
              onChange={(e: React.FormEvent<HTMLInputElement>) => setDeckTitle(e?.currentTarget?.value || '')}
            />
            <button className="save-deck" onClick={handleDeckSubmit}>
              Save deck
            </button>
            <button className="load-deck" onClick={handleLoadDeck}>
              Load deck
            </button>
          </div>
        </div>
      </div>
      <div className="bg-wrapper" />
    </div>
  );
};

export default DeckBuilderContainer;
