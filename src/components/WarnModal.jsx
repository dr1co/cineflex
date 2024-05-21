import styled from "styled-components";

export default function WarnModal({ message, setMessage }) {
  return (
    <>
      <BackgroundFade message={message} />
      <Modal message={message}>
        <div>
          <h2>Aviso!</h2>
          <p>{message}</p>
          <button onClick={() => setMessage("")}> Fechar </button>
        </div>
      </Modal>
    </>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.message === "" ? "none" : "block")};
  z-index: 3;

  div {
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border: 0 solid transparent;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(232, 131, 58, 0.5);
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #e8833a;
  }

  p {
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
  }

  button {
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
    width: 120px;
    height: 28px;
    background-color: #e8833a;
    border: 0 solid transparent;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const BackgroundFade = styled.div`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
  z-index: 2;
  display: ${(props) => (props.message ? "block" : "none")};
`;
