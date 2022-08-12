import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalScreen from "./screens/Modal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/modal" element={<ModalScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
