import React, { useState } from 'react';
import Pokeball from '../../assets/pokeball-open.png';
import Pokedex from '../Pokedex/Pokedex';
import './Sprites.scss';

const Sprites = ({ searchResult }) => {
    let [display, setDisplay] = useState(false);

    const handleClick = () => {
        setDisplay(true)
    }

    return (
        <div className='container-sprites'>
            {(display) 
            ? <Pokedex result={searchResult} />
            : <div className='sprites-elements'>
                <img className='sprite-pokemon'
                    src={searchResult.sprites.other.home.front_default}
                    alt="sprite pokemon" 
                    onClick={handleClick}/>
                <img className='pokeball-open' src={Pokeball} alt="pokeball" />
            </div>}
        </div>
    );
};

export default Sprites;