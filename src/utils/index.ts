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
