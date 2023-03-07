import React, { useState } from 'react';
import logo from '../../assets/pokeapi_256.png';
import './Banner.scss';

const Banner = () => {

    const [data, setData] = useState({});

    const response = async () => {
        const pokemon = document.querySelector('input[type=text]').value
        const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()
        setData(data);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        response();
    }

    return (
        <div className='container'>
            <h1>Find your pokemon with the</h1>
            <img src={logo} alt='PokeApi'/>
            <form>
                <input type="text" placeholder='Search here !' />
                <button onClick={handleSearch} id = "start">START GAME</button>
            </form>
        </div>
    );
};

export default Banner;