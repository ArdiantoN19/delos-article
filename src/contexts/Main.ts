import React, { createContext } from "react";
import { IDataDelos } from "@/types/main";
import { TLuckyDraw, TMyArticle } from "@/types/service";

interface IMainProps<TMyArticle, TLuckyDraw> {
  dataDelos: IDataDelos<TMyArticle, TLuckyDraw>;
  setDataDelos: React.Dispatch<
    React.SetStateAction<IDataDelos<TMyArticle, TLuckyDraw>>
  >;
  isLoading: boolean;
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
  isLoading: true,
});

export default MainContext;
