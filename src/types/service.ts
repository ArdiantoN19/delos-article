export type TMyArticle = {
  id: number;
  isFree: boolean;
};

export type TResultLog = {
  isLucky: boolean;
  isAvatar: boolean;
  value: number | string;
};

export type TLog = {
  time: string;
  result: TResultLog;
};

export type TLuckyDraw = {
  tickets: number;
  logs: TLog[];
};

export type TAddMyArticle = {
  id: number;
  isFree: boolean;
  price: number;
};

export interface IDelosServiceService<T> {
  setInitialDataDelos(): void;
  getDataDelos(): void;
  addArticles(articles: T[]): void;
  addMyArticle({ id, isFree, price }: TAddMyArticle): void;
}
