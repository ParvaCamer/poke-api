import React, { useState } from 'react';
import Pokeball from '../../assets/pokeball-open.png';
import Pokedex from '../Pokedex/Pokedex';
import './Sprites.scss';

const Sprites = ({ searchResult }) => {
    let [display, setDisplay] = useState(false);

    console.log(searchResult)
    const handleClick = () => {
        setDisplay(true)
    }

    return (
        <div className='container-sprites'>
            {(display) 
            ? <Pokedex result={searchResult} />
            : <div className='sprites-elements'>
                <img className={searchResult.name === "MissingNO" ? 'sprite-missingno' : 'sprite-pokemon'}
                    src={searchResult.sprites.other.home.front_default}
                    alt="sprite pokemon" 
                    onClick={handleClick}/>
                <img className='pokeball-open' src={Pokeball} alt="pokeball" />
            </div>}
        </div>
    );
};

export default Sprites;