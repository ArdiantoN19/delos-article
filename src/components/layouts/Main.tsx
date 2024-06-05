import React, { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/fragments/Navbar";
import { Outlet } from "react-router-dom";
import MainContext from "@/contexts/Main";
import { IDataDelos } from "@/types/main";
import delosService from "@/services";
import { TLuckyDraw, TMyArticle } from "@/types/service";

const MainLayout: React.FC = () => {
  const [dataDelos, setDataDelos] = useState<
    IDataDelos<TMyArticle, TLuckyDraw>
  >({
    coins: 0,
    myArticles: [],
    luckyDraw: {
      tickets: 0,
      logs: [],
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const localDataDelos: IDataDelos<TMyArticle, TLuckyDraw> =
      delosService.getDataDelos();
    setDataDelos(localDataDelos);
    setIsLoading(false);
  }, []);

  const value = useMemo(
    () => ({ dataDelos, setDataDelos, isLoading }),
    [dataDelos, isLoading]
  );

  return (
    <MainContext.Provider value={value}>
      <Navbar />
      <Outlet />
    </MainContext.Provider>
  );
};

export default MainLayout;
