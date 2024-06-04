import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../fragments/Navbar";
import { Outlet } from "react-router-dom";
import MainContext from "../../contexts/Main";
import { IDataDelos } from "../../types/main";
import { getDataDelos } from "../../services";

const MainLayout: React.FC = () => {
  const [coins, setCoins] = useState<number>(0);

  const value = useMemo(() => ({ coins, setCoins }), [coins]);

  useEffect(() => {
    const dataDelos: IDataDelos<any> = getDataDelos();
    setCoins(dataDelos.coins);
  }, []);

  return (
    <MainContext.Provider value={value}>
      <Navbar />
      <Outlet />
    </MainContext.Provider>
  );
};

export default MainLayout;
