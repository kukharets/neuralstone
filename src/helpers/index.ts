import { dummyClassesData, IDummyClassData } from '../data/dummyClassesData';
import { ICard } from '../interfaces/cards';

export const generateSimpleID = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const getRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};

export const getRandomNumber = (from: number, to: number): number => {
  return Math.floor(Math.random() * to) + from;
};

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

export const generatePlayerStartHand = (deckTitle: string, isPlayerTurnFirst: boolean) => {
  const shuffledDeck = getShuffledDeck(deckTitle).map(card => ({
    ...card,
    sessionID: generateSimpleID(),
  }));
  const startHandLenght = isPlayerTurnFirst ? 3 : 4;
  const hand = shuffledDeck.slice(0, startHandLenght);
  const deck = shuffledDeck.slice(startHandLenght);
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
