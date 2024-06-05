import React, { useContext } from "react";
import Container from "@/components/ui/Container";
import { StyledLuckyCoin } from "./styles";
import ButtonBuyTicket from "./ButtonBuyTicket";
import MainContext from "@/contexts/Main";
import ButtonLuckyDraw from "./ButtonLuckyDraw";

const LuckyCoin: React.FC = () => {
  const { dataDelos } = useContext(MainContext);

  return (
    <Container>
      <StyledLuckyCoin.StyledLuckyCoinHeader>
        <div>
          <h3 className="title">Lucky Draw</h3>
          <p>50.000 coins for 3 tickets</p>
          <p className="prize">
            Prize: <strong>50.000, 20.000, try again, avatar</strong>
          </p>
        </div>
        <ButtonBuyTicket />
      </StyledLuckyCoin.StyledLuckyCoinHeader>
      <StyledLuckyCoin.StyledLuckyCoinBody>
        <h4 className="ticket">Your Tickets: {dataDelos.luckyDraw.tickets}</h4>
        <ButtonLuckyDraw />
      </StyledLuckyCoin.StyledLuckyCoinBody>
    </Container>
  );
};

export default LuckyCoin;
