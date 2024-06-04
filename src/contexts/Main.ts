import React, { createContext } from "react";
import { IDataDelos } from "../types/main";
import { TLuckyDraw, TMyArticle } from "../types/service";

interface IMainProps<TMyArticle, TLuckyDraw> {
  dataDelos: IDataDelos<TMyArticle, TLuckyDraw>;
  setDataDelos: React.Dispatch<
    React.SetStateAction<IDataDelos<TMyArticle, TLuckyDraw>>
  >;
}

const MainContext = createContext<IMainProps<TMyArticle, TLuckyDraw>>({
  dataDelos: {
    coins: 0,
    myArticles: [],
    luckyDraw: {
      tickets: 0,
      logs: [],
    },
  },
  setDataDelos: () => {},
});

export default MainContext;
