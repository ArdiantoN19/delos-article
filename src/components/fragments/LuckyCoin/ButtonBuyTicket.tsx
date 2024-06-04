import React, { useCallback, useContext } from "react";
import { StyledButtonBuyTicket } from "./styles";
import MainContext from "../../../contexts/Main";
import delosService from "../../../services";

const PRICE_TICKET: number = 50000;
const INITIAL_TICKET: number = 3;

const ButtonBuyTicket: React.FC = () => {
  const { dataDelos, setDataDelos } = useContext(MainContext);

  const onBuyTicketHandler = useCallback(() => {
    if (dataDelos.coins >= PRICE_TICKET) {
      delosService.addTicket(INITIAL_TICKET, PRICE_TICKET);
      setDataDelos((prev) => ({
        ...prev,
        coins: prev.coins - PRICE_TICKET,
        luckyDraw: {
          ...prev.luckyDraw,
          tickets: prev.luckyDraw.tickets + INITIAL_TICKET,
        },
      }));
      return;
    }
    alert("Not enough coins");
  }, [dataDelos, setDataDelos]);

  return (
    <StyledButtonBuyTicket onClick={onBuyTicketHandler}>
      Buy Ticket
    </StyledButtonBuyTicket>
  );
};

export default ButtonBuyTicket;
