import "./App.css";
import MainView from "./components/MainView";
import HistoryView from "./components/HistoryView";
import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState("main");

  return (
    <div className='container'>
      {view === "main" ? (
        <MainView setView={setView} />
      ) : (
        <HistoryView setView={setView} />
      )}
    </div>
  );
}

export default App;
