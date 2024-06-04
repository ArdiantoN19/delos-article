import React, { useCallback, useState } from "react";
import { getLocalStorage } from "../../utils";
import DetailArticle from "../../components/fragments/DetailArticle";
import { useParams } from "react-router-dom";
import { TArticle } from "../../types/article";
import useFirstRender from "../../hooks/useFirstRender";
import Container from "../../components/ui/Container";

const DetailArticlePage: React.FC = () => {
  const articles: TArticle[] = getLocalStorage("articles");
  const [article, setArticle] = useState<TArticle>({} as TArticle);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  const findArticle = useCallback(() => {
    const findIndexArticle = articles.findIndex(
      (article) => article.id === Number(id)
    );
    if (findIndexArticle === -1) {
      setError("Article not found, please check your ID");
    }
    setArticle(articles[findIndexArticle]);
    setIsLoading(false);
  }, [id, articles]);

  useFirstRender(findArticle);

  if (error) {
    return <Container>{error}</Container>;
  }

  if (isLoading) {
    return <Container>Loading...</Container>;
  }
  return <DetailArticle {...article} />;
};

export default DetailArticlePage;
