import GlobalStyle from "./GlobalStyle";
import Calendar from "./Calendar";
import Side from "./Side";
import MusicianAdd from "./MusicianAdd";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MusicianAdd />}></Route>
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
    
    // <div className="App">
    // <div style={{position: 'relative'}}>
    //   <Side />
    //   <Calendar />
    // </div>
    // </div>
  );
}

export default App;
