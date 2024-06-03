import { useEffect, useRef } from "react";

const useFirstRender = (callback: () => void): void => {
  const isFirstRender = useRef<boolean>(false);

  useEffect(() => {
    if (!isFirstRender.current) {
      callback();
      isFirstRender.current = true;
    }
  }, [callback]);
};

export default useFirstRender;
