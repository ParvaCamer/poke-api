import React, { useState } from 'react';
import logoAPI from '../../assets/pokeapi.png';
import logoSquirtle from '../../assets/squirtle-2.png';
import './Banner.scss';

const Banner = ({ onSearch, resetSprite }) => {

  const [data, setData] = useState({});

  const response = async () => {
    const pokemon = document.querySelector('input[type=text]').value.toLowerCase()
    const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json();
    setData(data);
    onSearch(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    document.querySelector('input[type="text"]').style.background = 'url(' + logoSquirtle + ') no-repeat 95%'
    document.querySelector('input[type="text"]').style.backgroundSize = "35px";
    document.querySelector('.pokeball').classList.add('hide-pokeball');
    setTimeout(() => {
      resetSprite(false);
      response();
    }, 2000);
  }

  const handleChange = (e) => {
    if (JSON.stringify(data) !== '{}') {
      document.querySelector('.container-sprites').classList.add('hide-sprites');
      setTimeout(() => {
        resetSprite(true);
        setData({})
      }, 2000);
    }
  };

  return (
    <div className='container'>
      <h1>Find your pokemon with the</h1>
      <img src={logoAPI} alt='PokeApi' />
      <form>
        <input type="text" placeholder='Search here !' onChange={(e) => handleChange(e.target.value)} />
        <button onClick={handleSearch} id="start">Show my pokemon</button>
      </form>
    </div>
  );
};

export default Banner;
