import React, { createContext } from "react";

interface IMainProps {
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const MainContext = createContext<IMainProps>({
  coins: 100000,
  setCoins: () => {},
});

export default MainContext;
