import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./Pokemon/PokemonList/PokemonList";
import PokemonDetails from "./Pokemon/PokemonDetails/PokemonDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: "-1"
            }}
          >
            <source src={require("./pokebg.mp4")} type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;