export interface ICard {
  id: number;
  word: string;
  word_translation: string;
  phonetics: string;
  sentence: string;
  sentence_translation: string;
  img: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IContext {
  cards: ICard[];
  step: number;
  setStep: (arg0: number) => void;
  isAuth: boolean;
  setIsAuth: (arg0: boolean) => void;
}
