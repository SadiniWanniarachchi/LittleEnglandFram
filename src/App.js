import "./App.css";
import Header from "./components/header.js";
import Home from "./pages/home.js";
import Footer from "./components/Footer.js"; // Importing Footer component

import React, { useState, useEffect } from "react";
import Preloader from "./components/PreLoader"; // Import the Preloader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds (adjust as needed)
    }, 3500); // Adjust time as needed (in milliseconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader /> // Show preloader while loading is true
      ) : (
        <>
          <Header />
          <Home />
          <Footer /> {/* Adding the Footer component here */}
        </>
      )}
    </div>
  );
}

export default App;
