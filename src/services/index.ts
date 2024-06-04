import { TArticle } from "../types/article";
import {
  IDelosServiceService,
  TAddMyArticle,
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

  constructor() {
    this.coins = 100000;
    this.myArticles = [];
  }

  setInitialDataDelos() {
    const initialDataDelos = {
      coins: this.coins,
      myArticles: this.myArticles,
    };
    setLocalStorage("delos", initialDataDelos);
  }

  getDataDelos() {
    const datas = getLocalStorage("delos");
    if (!datas) {
      this.setInitialDataDelos();
    }
    return datas;
  }

  addArticles(articles: TArticle[]) {
    const localArticles: TArticle[] | null = getLocalStorage("articles");

    if (!localArticles) {
      setLocalStorage<TArticle[]>("articles", articles);
      return;
    }

    const result = concatArticlesWithoutDuplicates(localArticles, articles);
    setLocalStorage("articles", result);
  }

  addMyArticle({ id, isFree, price }: TAddMyArticle) {
    const dataDelos = this.getDataDelos();
    dataDelos.coins = dataDelos.coins - price;
    dataDelos.myArticles = [...dataDelos.myArticles, { id, isFree }];
    setLocalStorage("delos", dataDelos);
  }
}

const delosService = new DelosService();
export default delosService;
