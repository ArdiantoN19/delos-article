import { IResponseApi, TFilter } from "../types/api";
import { TArticle } from "../types/article";

const API_BASE_URL = import.meta.env.VITE_NYT_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

export const getArticleByFilter = async (
  filter: TFilter
): Promise<IResponseApi<TArticle[]>> => {
  const response = await fetch(
    `${API_BASE_URL}/${filter}/7.json?api-key=${API_KEY}`
  );
  if (!response.ok) {
    return { status: "error", data: [], error: "Something went wrong" };
  }
  const responseJson = await response.json();
  return { status: "success", data: responseJson.results };
};
