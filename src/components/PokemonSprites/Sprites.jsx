import React from 'react';

const Sprites = ({searchResult}) => {
    return (
        <div>
            <h2>{searchResult.name}</h2>
            <img src={searchResult.sprites.other.home.front_default} alt="sprite pokemon" />
        </div>
    );
};

export default Sprites;