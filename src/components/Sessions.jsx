import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { apiAddress } from "../api/apiAddress.js";
import WarnModal from "./WarnModal.jsx";

export default function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [movie, setMovie] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    const request = axios.get(`${apiAddress}/movies/${movieId}/showtimes`);
    request.then((response) => {
      setSessions(response.data.days);
      setMovie({
        title: response.data.title,
        poster: response.data.posterURL,
      });
    });

    request.catch((err) => {
      console.log(err);
      setModalMessage(
        "Não foi possível carregar as sessões do filme escolhido..."
      );
    });
  }, [movieId]);

  return (
    <>
      <WarnModal message={modalMessage} setMessage={setModalMessage} />
      <Container>
        <Command> Selecione os horários </Command>
        {sessions.map((session) => (
          <Session
            key={session.id}
            weekday={session.weekday}
            date={session.date}
            sessionTime={session.showtimes}
          />
        ))}
      </Container>
      <PageFooter poster={movie.poster} title={movie.title} />
    </>
  );
}

function Session({ weekday, date, sessionTime }) {
  return (
    <>
      <Date>
        {weekday} - {date}
      </Date>
      <SessionList>
        {sessionTime.map((session) => (
          <SessionTimes key={session.id} id={session.id} time={session.name} />
        ))}
      </SessionList>
    </>
  );
}

function SessionTimes({ id, time }) {
  return (
    <StyledLink to={`/sessao/${id}`}>
      <SessionButton>{time}</SessionButton>
    </StyledLink>
  );
}

function PageFooter({ poster, title }) {
  return (
    <Footer>
      <FooterContent>
        <MovieContainer>
          <img src={poster} />
        </MovieContainer>
        <MovieTitle>{title}</MovieTitle>
      </FooterContent>
    </Footer>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 95px 0 147px 0;
  padding: 0 20px;
`;

const Command = styled.p`
  width: 100%;
  margin: 36px auto;
  text-align: center;
  font-size: 24px;
  color: #293845;
  letter-spacing: 0.04cm;
`;

const Date = styled.p`
  font-size: 20px;
  letter-spacing: 0.02cm;
  color: #293845;
`;

const SessionList = styled.div`
  height: 86px;
  display: flex;
  align-items: center;
`;

const SessionButton = styled.div`
  width: 83px;
  height: 43px;
  margin-right: 10px;
  background-color: #e8833a;
  border-radius: 3px;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  $:last-of-type {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
  margin: auto 20px;
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
  color: #293845;
`;
