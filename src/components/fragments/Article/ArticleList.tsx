import React from "react";
import ArticleItem from "./ArticleItem";
import { TArticle } from "@/types/article";
import { StyledArticleList } from "./styles";

const ArticleList: React.FC<{ articles: TArticle[] }> = ({ articles }) => {
  if (!articles) {
    return null;
  }

  if (!articles.length) {
    return <div>No articles found</div>;
  }

  return (
    <StyledArticleList>
      {articles.map((article, index) => (
        <ArticleItem
          {...article}
          key={article.id + index}
          image={
            article.media.length
              ? article.media[0]["media-metadata"][0].url
              : "/images/default-image.png"
          }
        />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
