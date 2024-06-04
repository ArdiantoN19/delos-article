import { TArticle } from "../types/article";
import {
  IDelosServiceService,
  TAddMyArticle,
  TLuckyDraw,
  TMyArticle,
} from "../types/service";
import { getLocalStorage, setLocalStorage } from "../utils";

const concatArticlesWithoutDuplicates = (
  article1: TArticle[],
  article2: TArticle[]
): TArticle[] => {
  const uniqueIds = new Set();

  const result = article1.concat(article2).filter((article) => {
    if (!uniqueIds.has(article.id)) {
      uniqueIds.add(article.id);
      return true;
    }
    return false;
  });

  return result;
};

class DelosService implements IDelosServiceService<TArticle> {
  private coins: number;
  private myArticles: TMyArticle[];
  private luckyDraw: TLuckyDraw;
  private VITE_ARTICLE_STORAGE_KEY: string;
  private VITE_MAIN_DELOS_STORAGE_KEY: string;

  constructor() {
    this.coins = 100000;
    this.myArticles = [];
    this.luckyDraw = {
      tickets: 0,
      logs: [],
    };
    this.VITE_ARTICLE_STORAGE_KEY = import.meta.env.VITE_ARTICLE_STORAGE_KEY;
    this.VITE_MAIN_DELOS_STORAGE_KEY =
      import.meta.env.VITE_MAIN_DELOS_STORAGE_KEY;
  }

  setInitialDataDelos() {
    const initialDataDelos = {
      coins: this.coins,
      myArticles: this.myArticles,
      luckyDraw: this.luckyDraw,
    };
    setLocalStorage(this.VITE_MAIN_DELOS_STORAGE_KEY, initialDataDelos);
  }

  getDataDelos() {
    const datas = getLocalStorage(this.VITE_MAIN_DELOS_STORAGE_KEY);
    if (!datas) {
      this.setInitialDataDelos();
    }
    return datas;
  }

  addArticles(articles: TArticle[]) {
    const localArticles: TArticle[] = getLocalStorage(
      this.VITE_ARTICLE_STORAGE_KEY
    );

    if (!localArticles?.length) {
      setLocalStorage<TArticle[]>(this.VITE_ARTICLE_STORAGE_KEY, articles);
      return;
    }

    const result = concatArticlesWithoutDuplicates(localArticles, articles);
    setLocalStorage(this.VITE_ARTICLE_STORAGE_KEY, result);
  }

  addMyArticle({ id, isFree, price }: TAddMyArticle) {
    const dataDelos = this.getDataDelos();
    dataDelos.coins -= price;
    dataDelos.myArticles = [...dataDelos.myArticles, { id, isFree }];
    setLocalStorage(this.VITE_MAIN_DELOS_STORAGE_KEY, dataDelos);
  }

  addTicket(tickets: number, price: number) {
    const dataDelos = this.getDataDelos();
    dataDelos.coins -= price;
    dataDelos.luckyDraw.tickets += tickets;
    setLocalStorage(this.VITE_MAIN_DELOS_STORAGE_KEY, dataDelos);
  }
}

const delosService = new DelosService();
export default delosService;
