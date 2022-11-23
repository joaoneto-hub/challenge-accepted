import { Routes, Route, BrowserRouter } from "react-router-dom";

import './styles/styleApp.css'

import Home from "./pages/Home/index";
import Header from "./components/Header/index";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
