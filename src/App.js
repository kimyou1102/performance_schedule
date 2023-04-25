import GlobalStyle from "./GlobalStyle";
import Calendar from "./Calendar";
import Side from "./Side";
import MusicianAdd from "./MusicianAdd";
import { Routes, Route } from "react-router-dom";
import KakaoAuthHandler from "./KakaoAuthHandler";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
          <MusicianAdd />
        }></Route>
        <Route path="/oauth" element={
          <KakaoAuthHandler />
        }></Route>
        <Route
          path="/calendar"
          element={
            <div style={{ position: "relative" }}>
              <Side />
              <Calendar />
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;


