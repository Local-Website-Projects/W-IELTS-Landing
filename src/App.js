import React , { useState, useEffect } from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./components/ScroolTop";
import Preloader from "./components/Preloader";

function App() {
    // State to track loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading with a timeout (e.g., replace with API/data fetching logic if needed)
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after the page is "ready"
        }, 4000); // Adjust the timeout duration to your needs

        return () => clearTimeout(timer); // Cleanup timer
    }, []);
  return (
    <div>
      <BrowserRouter>
          <ScrollTop/>
          <Preloader/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
