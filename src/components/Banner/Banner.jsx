import React, { useState } from 'react';
import logoAPI from '../../assets/pokeapi.png';
import logoSquirtle from '../../assets/squirtle-2.png';
import './Banner.scss';

const Banner = ({onSearch}) => {

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
        document.querySelector('input[type="text"]').style.backgroundSize = "35px"
        response();
    }

    return (
        <div className='container'>
            <h1>Find your pokemon with the</h1>
            <img src={logoAPI} alt='PokeApi'/>
            <form>
                <input type="text" placeholder='Search here !' />
                <button onClick={handleSearch} id = "start">START GAME</button>
            </form>
        </div>
    );
};

export default Banner;