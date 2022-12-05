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
