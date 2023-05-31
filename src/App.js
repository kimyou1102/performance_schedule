import GlobalStyle from "./GlobalStyle";
import CalendarPage from "./pages/CalendarPage";
import MusicianAdd from "./MusicianAdd";
import { Routes, Route } from "react-router-dom";
import KakaoAuthHandler from "./pages/KakaoAuthHandler";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MusicianAdd />}></Route>
        <Route path="/oauth" element={<KakaoAuthHandler />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
