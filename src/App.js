import './App.css';
import React from 'react';
import SearchMovies from "./components/searchMovies";
import Header from "./components/header";


function App() {
  return (
    <div className="container">
      <video loop autoPlay muted id="bg--video">
        <source src={require ('../src/video/movie.mp4')} type="video/mp4" />
      </video>
      <Header/>
      <SearchMovies/>
    </div>
  );
}

export default App;
