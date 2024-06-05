import React, { createContext } from "react";
import { TArticle } from "@/types/article";

interface ArticleContextProps {
  articles: TArticle[];
  setArticles: React.Dispatch<React.SetStateAction<TArticle[]>>;
  isLoading: boolean;
  hasLoading: boolean;
  setHasLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
}

const ArticleContext = createContext<ArticleContextProps>({
  articles: [],
  setArticles: () => {},
  isLoading: false,
  hasLoading: false,
  setHasLoading: () => {},
  error: "",
});

export default ArticleContext;
