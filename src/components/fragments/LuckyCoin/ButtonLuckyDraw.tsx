import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyledAvatar, StyledButtonLuckyDraw } from "./styles";
import Loader from "@/components/ui/Loader";
import { getLuckyDraw } from "@/utils";
import MainContext from "@/contexts/Main";
import { TLog, TResultLog } from "@/types/service";
import delosService from "@/services";

const ButtonLuckyDraw: React.FC = () => {
  const { dataDelos, setDataDelos } = useContext(MainContext);
  const [dataLuckyDraw, setDataLuckyDraw] = useState<TResultLog>(
    {} as TResultLog
  );
  const [isStart, setIsStart] = useState<boolean>(false);

  useEffect(() => {
    if (isStart) {
      const stoIsStart = setTimeout(() => {
        setIsStart(false);
      }, 500);

      return () => clearTimeout(stoIsStart);
    }
  }, [isStart]);

  const onLuckyDrawHandler = useCallback(() => {
    if (dataDelos.luckyDraw.tickets > 0) {
      const luckyDraw = getLuckyDraw(dataDelos);
      setIsStart(true);
      setDataLuckyDraw(luckyDraw);

      const log: TLog = {
        time: new Date().toISOString(),
        result: luckyDraw,
      };

      const coins =
        luckyDraw.isLucky && typeof luckyDraw.value === "number"
          ? dataDelos.coins + luckyDraw.value
          : dataDelos.coins;

      setDataDelos((prev) => ({
        ...prev,
        coins,
        luckyDraw: {
          ...prev.luckyDraw,
          tickets: prev.luckyDraw.tickets - 1,
          logs: [...prev.luckyDraw.logs, log],
        },
      }));
      delosService.addLog(coins, log);

      return;
    }

    alert("your ticket is not enough");
  }, [dataDelos, setDataDelos]);

  return (
    <>
      {isStart ? (
        <Loader size={44} />
      ) : dataLuckyDraw.isAvatar ? (
        <StyledAvatar
          src={dataLuckyDraw.value as string}
          alt="avatar"
          width={200}
        />
      ) : (
        <p>
          <strong>{dataLuckyDraw.value}</strong>
        </p>
      )}
      <StyledButtonLuckyDraw onClick={onLuckyDrawHandler} disabled={isStart}>
        Start Your Lucky
      </StyledButtonLuckyDraw>
    </>
  );
};

export default ButtonLuckyDraw;
