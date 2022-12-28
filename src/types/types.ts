export interface ICard {
  id: number;
  word: string;
  wordTranslation: string;
  phonetics: string;
  sentence: string;
  sentenceTranslation: string;
  imgSrc: string;
  repeatTime: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IContext {
  cards: ICard[],
  step: number,
  setStep: (arg0: number) => void,
  isAuth: boolean,
  setIsAuth: (arg0: boolean) => void,
}
