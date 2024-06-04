export type TMyArticle = {
  id: number;
  isFree: boolean;
};
type TLog = {
  time: Date;
  coin: number;
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
