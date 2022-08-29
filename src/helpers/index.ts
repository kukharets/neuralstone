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

export const generatePlayerStartHand = (deckTitle: string, isFirstTurn: boolean) => {
  const shuffledDeck = getShuffledDeck(deckTitle);
  const hand = shuffledDeck.slice(0, 3);
  const deck = shuffledDeck.slice(3);
  if (!isFirstTurn) {
    hand.push(dummyCardsData.coin);
  }
  return { deck, hand };
};

export const getClassData = (classTitle: string): IDummyClassData => {
  return dummyClassesData[classTitle];
};

export const generateStartDeck = ({
  deckTitle,
  classTitle,
  isPlayerTurn,
}: {
  deckTitle: string;
  classTitle: string;
  isPlayerTurn: boolean;
}) => {
  const { deck, hand } = generatePlayerStartHand(deckTitle, isPlayerTurn);
  const classData: IDummyClassData = getClassData(classTitle);
  return { deck, hand, ...classData, isPlayerTurn };
};
