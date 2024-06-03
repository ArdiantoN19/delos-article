import React, { createContext } from "react";
import { TArticle } from "../types/article";

interface ArticleContextProps {
  articles: TArticle[];
  filteredArticles: TArticle[];
  setArticles: React.Dispatch<React.SetStateAction<TArticle[]>>;
  setFilteredArticles: React.Dispatch<React.SetStateAction<TArticle[]>>;
  isLoading: boolean;
  error: string;
}

const ArticleContext = createContext<ArticleContextProps>({
  articles: [],
  filteredArticles: [],
  setArticles: () => {},
  setFilteredArticles: () => {},
  isLoading: false,
  error: "",
});

export default ArticleContext;
