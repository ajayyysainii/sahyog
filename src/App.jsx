import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Mission from "./assets/components/Mission";
import SignUp from "./assets/components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <Mission />
            </div>
          }
        />
        <Route path="/aboutus" element={<Hero />} />
        <Route path="/faq" element={<Mission />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
