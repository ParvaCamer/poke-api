import React, { useState } from 'react';
import logoAPI from '../../assets/pokeapi.png';
import logoSquirtle from '../../assets/squirtle-2.png';
import MissingNo from '../../assets/missingNo.png';
import './Banner.scss';

const Banner = ({ onSearch, resetSprite }) => {

  let [data, setData] = useState({});

  const response = async () => {
    const pokemon = document.querySelector('input[type=text]').value.toLowerCase();
    try {
      const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json();
      if (data.detail) {
        throw new Error(data.detail);
      }
      setData(data);
      onSearch(data);
    } catch (error) {
      console.error(error);      
      const sendData = {
        sprites: {
          other: {
            home: {
              front_default: MissingNo
            }
          }
        },
        name: 'MissingNO',
        height: '????',
        weight: '????',
        types: [
          {
            type: {
              name: 'bird'
            }
          }
        ],
        id: "000"
      }
      onSearch(sendData);
      setData(sendData);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (document.querySelector('input[type="text"]').value) {
      document.querySelector('input[type="text"]').style.background = 'url(' + logoSquirtle + ') no-repeat 95%'
      document.querySelector('input[type="text"]').style.backgroundSize = "35px";
      document.querySelector('.pokeball').classList.add('hide-pokeball');
      setTimeout(() => {
        resetSprite(false);
        response();
      }, 2000);
    }
  }

  const handleChange = (e) => {
    if (JSON.stringify(data) !== '{}') {
      document.querySelector('.container-sprites').classList.add('hide-sprites');
      setTimeout(() => {
        resetSprite(true);
        data = {};
        onSearch({})
        console.log(data)
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
