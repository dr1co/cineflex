import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { apiAddress } from "../api/apiAddress.js";
import WarnModal from "./WarnModal.jsx";

export default function Seats() {
  const [seats, setSeats] = useState([]);
  const [session, setSession] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [credentials, setCredentials] = useState({});
  const [modalMessage, setModalMessage] = useState("");

  const { sessionId } = useParams();

  let navigate = useNavigate();

  function placeOrder() {
    if (selectedSeats.length === 0) {
      setModalMessage("Selecione ao menos um assento!");
      return;
    }

    if (Object.keys(credentials).length === 0) {
      setModalMessage("Preencha os campos corretamente!");
      return;
    }

    const regex = /^\d{11}$/;
    let flag = true;

    for (const cred in credentials) {
      if (!regex.test(credentials[cred].cpf) || !credentials[cred].name) {
        flag = false;
        break;
      }
    }

    if (flag) {
      const selectedSeatsId = selectedSeats.map((seat) => seat.id);
      const tickets = selectedSeats.map((seat) => {
        return {
          idAssento: seat.id,
          nome: credentials[seat.id].name,
          cpf: credentials[seat.id].cpf,
        };
      });
      const order = {
        ids: selectedSeatsId,
        compradores: tickets,
      };
      const request = axios.post(`${apiAddress}/seats/book-many`, order);
      request.then(() => {
        navigate("/sucesso", {
          state: {
            completedOrder: {
              ...order,
              seatsNumber: selectedSeats.map((seat) => seat.number),
              title: session.title,
              date: session.date,
              time: session.time,
            },
          },
        });
      });
    } else {
      setModalMessage("Preencha os campos corretamente!");
      return;
    }
  }

  useEffect(() => {
    const request = axios.get(`${apiAddress}/showtimes/${sessionId}/seats`);
    request.then((response) => {
      setSeats(response.data.seats);
      setSession({
        title: response.data.movie.title,
        poster: response.data.movie.posterURL,
        weekday: response.data.day.weekday,
        date: response.data.day.date,
        time: response.data.name,
      });
    });
  }, [sessionId]);

  return (
    <>
      <Container>
        <Command> Selecione o(s) assento(s) </Command>
        <SeatsList>
          {seats.map((seat) => (
            <Seat
              key={seat.id}
              id={seat.id}
              number={seat.name}
              availability={seat.isAvailable}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              setMessage={setModalMessage}
            />
          ))}
        </SeatsList>
        <Caption />
        <ViewerBox>
          {selectedSeats.map((seat) => (
            <ViewerCredentials
              key={seat.id}
              seatNumber={seat.number}
              seatId={seat.id}
              credentials={credentials}
              setCredentials={setCredentials}
            />
          ))}
        </ViewerBox>
        <FinishOrderButton onClick={placeOrder}>
          Reservar assento(s)
        </FinishOrderButton>
      </Container>
      <PageFooter
        poster={session.poster}
        title={session.title}
        weekday={session.weekday}
        time={session.time}
      />
      <WarnModal message={modalMessage} setMessage={setModalMessage} />
    </>
  );
}

function Seat({
  id,
  number,
  availability,
  selectedSeats,
  setSelectedSeats,
  setMessage,
}) {
  const [selected, setSelected] = useState(false);

  function selectSeat(id, number) {
    const seatsArrayId = [];
    selectedSeats.map((seat) => seatsArrayId.push(seat.id));

    if (seatsArrayId.includes(id)) {
      setSelected(false);
      setSelectedSeats(selectedSeats.filter((seat) => seat.id !== id));
    } else {
      setSelected(true);
      setSelectedSeats((prevSeats) => [...prevSeats, { id, number }]);
    }
  }

  if (availability) {
    if (!selected) {
      return (
        <SeatBall
          color={"#C3CFD9"}
          border={"#7B8B99"}
          cursor={"pointer"}
          onClick={() => selectSeat(id, number)}
        >
          {number}
        </SeatBall>
      );
    } else {
      return (
        <SeatBall
          color={"#8DD7CF"}
          border={"#45BDB0"}
          cursor={"pointer"}
          onClick={() => selectSeat(id, number)}
        >
          {number}
        </SeatBall>
      );
    }
  } else {
    return (
      <SeatBall
        color={"#FBE192"}
        border={"#F7C52B"}
        cursor={"default"}
        onClick={() => setMessage("Este assento não está disponível")}
      >
        {number}
      </SeatBall>
    );
  }
}

function Caption() {
  return (
    <CaptionBox>
      <CaptionElement>
        <CaptionBall color={"#8DD7CF"} border={"#45BDB0"}></CaptionBall>
        <p> Selecionado </p>
      </CaptionElement>
      <CaptionElement>
        <CaptionBall color={"#C3CFD9"} border={"#7B8B99"}></CaptionBall>
        <p> Disponível </p>
      </CaptionElement>
      <CaptionElement>
        <CaptionBall color={"#FBE192"} border={"#F7C52B"}></CaptionBall>
        <p> Indisponível </p>
      </CaptionElement>
    </CaptionBox>
  );
}

function ViewerCredentials({
  seatNumber,
  seatId,
  credentials,
  setCredentials,
}) {
  return (
    <CredentialsBox>
      <p>Assento {seatNumber} - Nome do comprador:</p>
      <Input
        onChange={(e) =>
          setCredentials({
            ...credentials,
            [seatId]: {
              ...credentials[seatId],
              name: e.target.value,
            },
          })
        }
        placeholder="Digite seu nome..."
      />
      <p>CPF do comprador:</p>
      <Input
        onChange={(e) =>
          setCredentials({
            ...credentials,
            [seatId]: {
              ...credentials[seatId],
              cpf: e.target.value,
            },
          })
        }
        placeholder="Digite seu CPF..."
      />
    </CredentialsBox>
  );
}

function PageFooter({ poster, title, weekday, time }) {
  return (
    <Footer>
      <FooterContent>
        <MovieContainer>
          <img src={poster} />
        </MovieContainer>
        <MovieTitle>
          {title} <br /> {weekday} - {time}
        </MovieTitle>
      </FooterContent>
    </Footer>
  );
}

const Container = styled.div`
  width: 360px;
  margin: 95px auto 147px auto;
`;

const Command = styled.p`
  width: 100%;
  margin: 36px auto 0 auto;
  font-size: 24px;
  text-align: center;
  color: #293845;
  letter-spacing: 0.04cm;
`;

const SeatsList = styled.div`
  width: 327px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const SeatBall = styled.div`
  width: 26px;
  height: 26px;
  margin: 9px 5px 9px 0;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  cursor: ${(props) => props.cursor};

  &:nth-of-type(10n) {
    margin-right: 0;
  }
`;

const CaptionBox = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CaptionElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 13px;
    text-align: center;
    color: #4e5a65;
    margin: 10px 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  height: 51px;
  background-color: #ffffff;
  border: 1px solid #d4d4d4;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-size: 18px;
    color: #afafaf;
  }
`;

const CaptionBall = styled.div`
  width: 26px;
  height: 26px;
  margin: 0 auto 5px auto;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
  border-radius: 50%;
`;

const ViewerBox = styled.div`
  width: 100%;
  padding: 0 20px;

  p {
    font-size: 18px;
    color: #293845;
  }
`;

const CredentialsBox = styled.div`
  margin: 12px auto;
  padding-top: 12px;
  border-top: 1px solid #293845;
`;

const FinishOrderButton = styled.button`
  width: 225px;
  height: 42px;
  margin: 10px auto 0 auto;
  background-color: #e8833a;
  border: 0px solid transparent;
  border-radius: 3px;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0.04cm;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Footer = styled.footer`
  width: 100%;
  height: 117px;
  background-color: #dfe6ed;
  position: fixed;
  border-top: 1px solid #9eadba;
  bottom: 0;
  z-index: 1;
`;

const FooterContent = styled.div`
  width: 100%;
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MovieContainer = styled.div`
  width: 64px;
  height: 89px;
  margin: 10px 0;
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 48px;
    height: 72px;
    object-fit: cover;
  }
`;

const MovieTitle = styled.h1`
  margin-left: 10px;
  font-size: 22px;
  line-height: 1.2;
  color: #293845;
`;
