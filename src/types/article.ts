type TMediaMetaData = {
  url: string;
  format: string;
  height: number;
  width: number;
};

export type TArticle = {
  id: number;
  url: string;
  type: string;
  section: string;
  published_date: string;
  title: string;
  abstract: string;
  byline: string;
  media: {
    "media-metadata": TMediaMetaData[];
  };
};
