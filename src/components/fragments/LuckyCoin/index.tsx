import React from "react";
import Container from "../../ui/Container";
import { StyledLuckyCoin } from "./styles";
import ButtonBuyTicket from "./ButtonBuyTicket";

const LuckyCoin: React.FC = () => {
  return (
    <Container>
      <StyledLuckyCoin.StyledLuckyCoinHeader>
        <div>
          <h3 className="title">Lucky Draw</h3>
          <p>50.000 coins for 3 tickets</p>
        </div>
        <ButtonBuyTicket />
      </StyledLuckyCoin.StyledLuckyCoinHeader>
    </Container>
  );
};

export default LuckyCoin;
