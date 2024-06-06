import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="box-border">
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
