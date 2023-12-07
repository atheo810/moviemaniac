import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList />
      </main>
    </div>
  );
}
