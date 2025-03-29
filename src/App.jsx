import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Mission from "./assets/components/Mission";
import SignUp from "./assets/components/SignUp";
import AboutUs from "./assets/components/AboutUs"
import Footer from "./assets/components/Footer";
import WhySahyog from "./assets/components/WhySahyog";
import Projects from "./assets/components/Projects";
import SahyogBot from "./assets/components/Chatbot/SahyogBot"
import Login from "./assets/components/Login";
import Counter from "./assets/components/Counter";
import SuccessStories from "./assets/components/SuccessStories";
import DonationForm from "./assets/components/DonationForm";

function App() {
  return (
    <>
    <SahyogBot />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <Mission />
              <WhySahyog />
              <SuccessStories />
              <Footer />
            </div>
          }
        />
        <Route path="/aboutus" element={<div><Navbar/><AboutUs /><Footer/></div>} />
        <Route path="/faq" element={<Mission />} />
        <Route path="/signup" element={<div><Navbar/><SignUp /><Footer /></div>} />
        <Route path="/login" element={<div><Navbar/><Login /><Footer /></div>} />
        <Route path="/projects" element={<div><Navbar/><Projects /><Footer /></div>} />
        <Route path="/donation" element={<div><Navbar/><DonationForm /><Footer /></div>} />
      </Routes>
    </>
  );
}

export default App;
