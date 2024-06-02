import { useEffect, useState } from "react";

function useFetch<T>(url: string): [T, boolean, string] {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_NYT_API_BASE_URL}${url}?api-key=${
            import.meta.env.VITE_NYT_API_KEY
          }`
        );
        const responseJson = await response.json();
        setData(responseJson.results);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return [data as T, isLoading, error];
}
export default useFetch;
