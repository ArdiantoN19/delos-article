import { useEffect, useState } from "react";
import { IResponseApi } from "../types/api";

function useFetch<T>(
  promises: Promise<IResponseApi<T>>[]
): [T, boolean, string] {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const responses = await Promise.all(promises);
        const responseJson = responses.reduce((currValue, result) => {
          if (result.status !== "success") {
            throw new Error(result.error);
          }
          currValue = [...currValue, ...(result.data as T[])];
          return currValue;
        }, [] as T[]);

        setData(responseJson as T);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return [data, isLoading, error];
}
export default useFetch;
