import GlobalStyle from "./styles/GlobalStyle";
import CalendarPage from "./pages/CalendarPage";
import MusicianAddPage from "./pages/MusicianAddPage";
import { Routes, Route } from "react-router-dom";
import KakaoAuthHandler from "./pages/KakaoAuthHandler";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MusicianAddPage />}></Route>
        <Route path="/oauth" element={<KakaoAuthHandler />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
