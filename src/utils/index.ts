import delosService from "../services";
import { TLog, TResultLog } from "../types/service";

export const createObjQuery = (searchParams: URLSearchParams) => {
  return Object.fromEntries(searchParams.entries());
};

export const dayFormatter = (date: string): number => {
  const now = new Date();
  const past = new Date(date);
  const diff = now.getTime() - past.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return days;
};

export const generateCoins = (dayDifference: number) => {
  if (dayDifference > 7) {
    return 0;
  }
  if (dayDifference > 1 && dayDifference <= 7) {
    return 20000;
  }
  return 50000;
};

const checkSupportLocalStorage = () => {
  if (typeof window === "undefined" || !window.localStorage) {
    console.log("local storage not supported");
    return false;
  }
};

export const getLocalStorage = (key: string) => {
  checkSupportLocalStorage();
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
};

export const setLocalStorage = <T>(key: string, value: T) => {
  checkSupportLocalStorage();
  localStorage.setItem(key, JSON.stringify(value));
};

export const showArticles = <T>(
  articles: T[],
  offset: number = 0,
  limit: number = 6
) => {
  const copyArticles = [...articles];
  const startIndex: number = offset * limit;
  return copyArticles.slice(startIndex, startIndex + limit);
};

const generateRandomNumber = (max: number = 100) => {
  return Math.floor(Math.random() * max) + 1;
};

const generateRandomString = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const generateRandomAvatar = () => {
  const randomString = generateRandomString();
  return `${import.meta.env.VITE_AVATAR_API_URL}?seed=${randomString}`;
};

const checkIsGetHighLuckyValue = () => {
  const dataDelos = delosService.getDataDelos();
  return dataDelos.luckyDraw.logs.some((log: TLog) => {
    return log.result.value === 50000;
  });
};

export const getLuckyDraw = (): TResultLog => {
  const isGetHighLuckyValue = checkIsGetHighLuckyValue();
  const luckyValue: Record<string, number> = {
    "85": 50000,
  };

  const randomValue = generateRandomNumber();

  if (randomValue % 10 === 0) {
    return {
      isLucky: true,
      isAvatar: false,
      value: 20000,
    };
  }

  if (randomValue % 13 === 0) {
    return { isLucky: true, isAvatar: true, value: generateRandomAvatar() };
  }

  if (!luckyValue[String(randomValue)] || isGetHighLuckyValue) {
    return { isLucky: false, isAvatar: false, value: "Try Again" };
  }

  return {
    isLucky: true,
    isAvatar: false,
    value: luckyValue[String(randomValue)],
  };
};
