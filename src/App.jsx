import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Navbar from "./components/includes/Navbar";
import Footer from "./components/includes/Footer";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <section className="max-w-[85%] flex flex-col justify-between min-h-screen mx-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
