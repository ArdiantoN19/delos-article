export const createObjQuery = (searchParams: URLSearchParams) => {
  return Object.fromEntries(searchParams.entries());
};
