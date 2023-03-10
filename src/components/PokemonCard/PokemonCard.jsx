import React from 'react';

const PokemonCard = ({result}) => {
    return (
        <div>
            <p>{result.name}</p>
            <p>{result.order}</p>
            <p>{result.height}</p>
            <p>{result.weight}</p>
            {/* <p>{result.types}</p> */}
        </div>
    );
};

export default PokemonCard;