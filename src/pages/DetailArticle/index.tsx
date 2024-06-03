import React, { useEffect, useMemo, useState } from "react";
import { getLocalStorage } from "../../utils";
import DetailArticle from "../../components/fragments/DetailArticle";
import { useParams } from "react-router-dom";
import { TArticle } from "../../types/article";

const DetailArticlePage: React.FC = () => {
  const articles: TArticle[] = getLocalStorage("articles");
  const [article, setArticle] = useState<TArticle>({} as TArticle);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const findIndexArticle = articles.findIndex(
      (article) => article.id === Number(id)
    );
    if (findIndexArticle === -1) {
      setError("Article not found, please check your ID");
    }
    setArticle(articles[findIndexArticle]);
    setIsLoading(false);
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <DetailArticle {...article} />;
};

export default DetailArticlePage;