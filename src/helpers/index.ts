import { dummyCardsData } from '../data/dummyCardsData';
import { dummyClassesData, IDummyClassData } from '../data/dummyClassesData';
import { ICard } from '../interfaces/cards';

const getDeckFromStorage = (deckTitle: string) => JSON.parse(localStorage.getItem(deckTitle) || '[]');

interface IStorageCard extends ICard {
  quantity: number;
}

const parseDeckFromStorage = (deck: IStorageCard[]) => {
  const newDeck: ICard[] = [];
  deck.forEach((card: IStorageCard) => {
    newDeck.push(card);
    if (card.quantity === 2) {
      newDeck.push(card);
    }
  });
  return newDeck;
};
export const getShuffledDeck = (deckTitle: string) =>
  parseDeckFromStorage(getDeckFromStorage(deckTitle)).sort(() => Math.random() - 0.5);

export const generatePlayerStartHand = (deck: ICard[], isFirstTurn: boolean) => {
  const newDeck = deck.sort(() => 0.5 - Math.random()).slice(0, 3);
  return isFirstTurn ? newDeck : [...newDeck, dummyCardsData.coin];
};

export const getClassData = (classTitle: string): IDummyClassData => {
  return dummyClassesData[classTitle];
};
