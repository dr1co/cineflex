import styled from "styled-components";

export default function Success() {
  return (
    <Container>
      <Title>
        Pedido feito <br /> com sucesso!
      </Title>
    </Container>
  );
}

const Container = styled.div`
  width: 360px;
  margin: 95px auto;
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
