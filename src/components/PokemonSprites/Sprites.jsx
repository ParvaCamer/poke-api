import React from 'react';
import Pokeball from '../../assets/pokeball-open.png';
import './Sprites.scss';

const Sprites = ({searchResult}) => {
    return (
        <div className='container-sprites'>
            <img className='sprite-pokemon' 
            src={searchResult.sprites.other.home.front_default} 
            alt="sprite pokemon" />
            <img className='pokeball-close' src={Pokeball} alt="pokeball" />
        </div>
    );
};

export default Sprites;