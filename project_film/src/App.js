import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=27bd4dad0754c77391111e35f827bd6a')
      .then(response => response.json())
      .then(json => setMovie(json.results))
  }
  useEffect(() => {
    fetchMovie()
  }, [])

  const search = async (q) => {
    const URL = `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=27bd4dad0754c77391111e35f827bd6a`;
    const response = await fetch(URL);
    const data = await response.json();

    if (data.results) {
      setMovie(data.results);
    }
  };

  return (
    <div className='container'>
      <form
        action=""
        className="search-bar"
        onSubmit={(e) => {
          e.preventDefault();
          const searchValue = e.target.querySelector('.MovieSearch').value;
          search(searchValue);
        }}
      >
        <input
          placeholder='Enter Film..'
          className='MovieSearch'
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
        <div className='container-category'>
          <input className="dark-light" type="checkbox" id="dark-light" name="dark-light" />

          <div className="light-back"></div>

          <div className="sec-center">
            <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
            <label className="for-dropdown" for="dropdown">Filter By<i className="uil uil-arrow-down"></i></label>
            <div className="section-dropdown">
              <a>Rating Tertinggi<i className="uil uil-arrow-right"></i></a>
              <a>Popular<i className="uil uil-arrow-right"></i></a>
              <a>Upcoming<i className="uil uil-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </form>


      <div className="card-container">
        {movie.map((val, index) => (
          <div div className="card" key={index} >
            <div className="wrapper">
              <img src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`} className="cover-image" alt={val.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
