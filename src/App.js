import './App.scss';
import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Sprites from './components/PokemonSprites/Sprites';
import Pokeball from './assets/pokeball-close.png';

function App() {

  const [searchResult, setSearchResult] = useState({});
  let [hasToReset, setHasToReset] = useState(Boolean);

  const handleSearchResult = (data) => {
    setSearchResult(data);
    console.log(data)
  }

  const handleResetSprite = (value) => {
    setHasToReset(value)
    hasToReset = value;
  }

  return (
    <div className="App">
      <Banner onSearch={handleSearchResult} resetSprite={handleResetSprite} />
      {(Object.keys(searchResult).length !== 0 && !hasToReset)
        ? <Sprites searchResult={searchResult} />
        : <img className='pokeball' src={Pokeball} alt="pokeball" />}
    </div>
  );
}

export default App;
