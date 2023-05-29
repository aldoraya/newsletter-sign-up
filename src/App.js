import './App.css';
import CardUpdate from "./components/CardUpdate";
import CardSuccess from "./components/CardSuccess";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-charcoal-grey">
      <Routes>
        <Route path="/" index element={<CardUpdate />} />
        <Route path="/success" element={<CardSuccess />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
