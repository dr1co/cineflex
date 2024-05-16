import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();
  const { completedOrder: order } = state;

  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        Pedido feito <br /> com sucesso!
      </Title>
      <MovieInfo>
        <div>
          <h1>Filme e sessão</h1>
          <p>
            {order.title} <br />
            {order.date} {order.time}
          </p>
        </div>
        <div>
          <h1>Ingressos</h1>
          {order.seatsNumber.map((seat, index) => (
            <p key={index}> Assento {seat} </p>
          ))}
        </div>
        <div>
          <h1>Comprador</h1>
          <p>
            Nome: {order.name} <br />
            CPF: {order.cpf}
          </p>
        </div>
      </MovieInfo>

      <ButtonDiv>
        <button onClick={() => navigate("/")}>Voltar para Home</button>
      </ButtonDiv>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 95px 0 32px 0;
`;

const Title = styled.p`
  width: 100%;
  margin: 36px auto 0 auto;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #247a6b;
  letter-spacing: 0.04cm;
`;

const MovieInfo = styled.div`
  width: 100%;

  div {
    height: fit-content;
    margin: 36px 16px;
  }

  h1 {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.04cm;
    color: #293845;
  }

  p {
    font-size: 22px;
    letter-spacing: 0.04cm;
    line-height: 1.1;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  button {
    width: 225px;
    height: 42px;
    background-color: #e8833a;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 0.04cm;
    border: 0 solid transparent;
    border-radius: 3px;
    cursor: pointer;
  }
`;
