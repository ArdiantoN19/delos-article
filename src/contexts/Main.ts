import React, { createContext } from "react";
import { IDataDelos } from "../types/main";
import { TMyArticle } from "../types/service";

interface IMainProps<T> {
  dataDelos: IDataDelos<T>;
  setDataDelos: React.Dispatch<React.SetStateAction<IDataDelos<T>>>;
}

const MainContext = createContext<IMainProps<TMyArticle>>({
  dataDelos: {
    coins: 0,
    myArticles: [],
  },
  setDataDelos: () => {},
});

export default MainContext;
