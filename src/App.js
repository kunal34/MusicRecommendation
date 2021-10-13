import React, { useState } from "react";
import "./styles.css";
import { genre } from "./dataBase";

var genreArray = Object.keys(genre);

export default function App() {
  const [selectedgenre, setSelectedgenre] = useState("Pop");
  function onClickHandler(song) {
    setSelectedgenre(song);
  }

  return (
    <div className="App">
      <header>
        <img
          className="header-img"
          src="https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg"
          alt="header_img"
        />
        <h1>Welcome Music Lovers</h1>
        <h2>Find out your Favourite music</h2>
      </header>
      <section>
        <ul>
          {genreArray.map(function (song, index) {
            return (
              <li key={index} onClick={() => onClickHandler(song)}>
                {song}
              </li>
            );
          })}
        </ul>
        {genre[selectedgenre].map(function (song) {
          return (
            <div className="info-card">
              <img className="image-card" src={song.poster} alt="card_img" />
              <div className="content-card">
                <div className="song-name">{song.songName}</div>
                <div className="artist-name">{song.Artist}</div>
                <div className="song-rating">{song.Rating}</div>
                <div className="song-description">{song.description}</div>
                <div></div>
                <div></div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
