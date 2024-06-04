import React, { createContext } from "react";

interface IMainProps {
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const MainContext = createContext<IMainProps>({
  coins: 0,
  setCoins: () => {},
});

export default MainContext;
