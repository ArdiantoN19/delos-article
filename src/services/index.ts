import { TArticle } from "../types/article";
import { TAddMyArticle } from "../types/service";
import { getLocalStorage, setLocalStorage } from "../utils";

const initialDelosData = {
  coins: 100000,
  myArticles: [],
};

export const setInitialDataDelos = () => {
  setLocalStorage("delos", initialDelosData);
};

export const getDataDelos = () => {
  const datas = getLocalStorage("delos");
  if (!datas) {
    setInitialDataDelos();
  }
  return datas;
};

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

export const addArticles = (articles: TArticle[]) => {
  const localArticles: TArticle[] | null = getLocalStorage("articles");

  if (!localArticles) {
    setLocalStorage<TArticle[]>("articles", articles);
    return;
  }

  const result = concatArticlesWithoutDuplicates(localArticles, articles);
  setLocalStorage("articles", result);
};

export const addMyArticle = ({ id, isFree, price }: TAddMyArticle) => {
  const dataDelos = getDataDelos();
  dataDelos.coins = dataDelos.coins - price;
  dataDelos.myArticles = [...dataDelos.myArticles, { id, isFree }];
  setLocalStorage("delos", dataDelos);
};
