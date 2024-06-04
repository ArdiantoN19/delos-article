import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../fragments/Navbar";
import { Outlet } from "react-router-dom";
import MainContext from "../../contexts/Main";
import { IDataDelos } from "../../types/main";
import delosService from "../../services";
import { TMyArticle } from "../../types/service";

const MainLayout: React.FC = () => {
  const [dataDelos, setDataDelos] = useState<IDataDelos<TMyArticle>>({
    coins: 0,
    myArticles: [],
  });

  const value = useMemo(() => ({ dataDelos, setDataDelos }), [dataDelos]);

  useEffect(() => {
    const localDataDelos: IDataDelos<TMyArticle> = delosService.getDataDelos();
    setDataDelos(localDataDelos);
  }, []);

  return (
    <MainContext.Provider value={value}>
      <Navbar />
      <Outlet />
    </MainContext.Provider>
  );
};

export default MainLayout;
