import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homepage/HomePage";
import Gaming from "./components/gaming/Gaming";
import Anime from "./components/anime/Anime";
import Food from "./components/food/Food";
import Music from "./components/music/Music";
import SignUp from "./components/sign-up/SignUp";
import Login from "./components/login/Login";
import { useState } from "react";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "secondary" ? "dark" : "secondary"));
  };

  return (
    <>
      <div className="App" id={theme}>
        <BrowserRouter>
          <div className="Navbar">
            <Navbar toggleTheme={toggleTheme} theme={theme} />
          </div>

          <div className="row">
            <div className="col-12 col-md-2 Sidebar">
              <SideBar theme={theme} />
            </div>
            <div className="col-12 col-md-10">
              <div className="Components">
                <Routes>
                  <Route path="/" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/home"
                    element={
                      <ProtectedRoute>
                        <HomePage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/gaming"
                    element={
                      <ProtectedRoute>
                        <Gaming />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/anime"
                    element={
                      <ProtectedRoute>
                        <Anime />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/food"
                    element={
                      <ProtectedRoute>
                        <Food />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/music"
                    element={
                      <ProtectedRoute>
                        <Music />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>

          <div className="Footer">
            <Footer theme={theme} />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
