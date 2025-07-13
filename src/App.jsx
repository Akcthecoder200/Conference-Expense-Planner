import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SelectionPage from "./components/SelectionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SelectionPage" element={<SelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
