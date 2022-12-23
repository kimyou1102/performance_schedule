import GlobalStyle from "./GlobalStyle";
import Calendar from "./Calendar";
import Side from "./Side";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div style={{position: 'relative'}}>
        <Side />
        <Calendar />
      </div>
    </div>
  );
}

export default App;