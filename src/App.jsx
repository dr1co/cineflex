import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import Sessions from "./components/Sessions.jsx";
import Seats from "./components/Seats.jsx";
import Success from "./components/Success.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/filme/:movieId" element={<Sessions />} />
        <Route path="/sessao/:sessionId" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
