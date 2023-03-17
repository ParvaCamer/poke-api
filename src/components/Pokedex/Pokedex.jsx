import React from 'react';
import './Pokedex.scss';

const PokemonCard = ({ result }) => {
    return (
        < div className="pokedex" >
            <div className="left-side">
                <div className="top-div">
                    <div className="button-left">
                        <div className="button-left-inside">
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="three-button">
                        <div className="button-red">
                            <div className="dot"></div>
                        </div>
                        <div className="button-yellow">
                            <div className="dot"></div>
                        </div>
                        <div className="button-green">
                            <div className="dot"></div>
                        </div>
                    </div>
                    <svg height="100" width="350" className="left-svg">
                        <polyline points="0,75 100,75 130,25 350,25" className='polyline-black' />
                    </svg>
                </div>
                <div className="center-div">
                    <div className="top-dots">
                        <div className="dots"></div>
                        <div className="dots"></div>
                    </div>
                    <div className="screen">
                        <img src={result.sprites.other.home.front_default} alt="pokemon sprites"/>
                    </div>
                    <div className="bottom-elements">
                        <div className="red-dot-left">
                            <div className="dot"></div>
                        </div>
                        <div className="burger-right">
                            <span className="span-burger"></span>
                            <span className="span-burger"></span>
                            <span className="span-burger"></span>
                            <span className="span-burger"></span>
                        </div>
                    </div>
                </div>
                <div className="bottom-div">
                    <div className="bottom-top">
                        <div className="dark-button"></div>
                        <div className="red-line"></div>
                        <div className="blue-line"></div>
                    </div>
                    <div className="bottom-bottom">
                        <div className="dots">
                            <span className="span-dots"></span>
                            <span className="span-dots"></span>
                        </div>
                        <div className="pokemon-name">
                            {result.name}
                        </div>
                        <div className="right-container">
                            <div className="cross">
                                <div className="vertical-line line"></div>
                                <div className="horizontal-line line">
                                    <div className="border-top"></div>
                                    <div className="border-bottom"></div>
                                </div>
                                <div className="dot-center"></div>
                            </div>
                            <div className="bottom-left">
                                <div className="red-dot-bottom-left">
                                    <div className="dot"></div>
                                </div>
                                <span className="span-dots"></span>
                                <span className="span-dots"></span>
                                <span className="span-dots"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="top-div">
                    <svg height="100" width="100%" className="right-svg">
                        <polyline points="0,0 0,53 200,53 244,100 350,100 350,0" className='polyline-white' />
                        <polyline points="0,53 200,53 255,114 245,99 350,99" className='polyline-black' />
                    </svg>
                </div>
                <div className="center-div">
                    <div className="screen">
                        <p>Height: {result.height}0cm</p>
                        <p>Weight: {result.weight}kg</p>
                    </div>
                    <div className="grid-button">
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                        <span className="blue-square"></span>
                    </div>
                </div>
                <div className="bottom-div">
                    <div className="bottom-top-div">
                        <div className="two-red-dots">
                            <div className="red-dot">
                                <div className="dot"></div>
                            </div>
                            <div className="red-dot">
                                <div className="dot"></div>
                            </div>
                        </div>
                        <div className="black-lines">
                            <span className="black-line"></span>
                            <span className="black-line"></span>
                        </div>
                    </div>
                    <div className="bottom-center-div">
                        <div className="white-squares">
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                        <div className="yellow-dot">
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="bottom-bottom-div">
                        <div className="display-screen">{result.types[0].type.name}</div>
                        <div className="display-screen">#{result.id}</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PokemonCard;