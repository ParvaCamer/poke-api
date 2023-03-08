import './App.css';
import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Sprites from './components/PokemonSprites/Sprites';

function App() {

  const [searchResult, setSearchResult] = useState({});

  console.log(searchResult)
  const handleSearchResult = (data) => {
    setSearchResult(data);
    console.log(data)
  }

  return (
    <div className="App">
      <Banner onSearch={handleSearchResult} />
      {Object.keys(searchResult).length !== 0 ? <Sprites searchResult={searchResult} /> : null}
    </div>
  );
}

export default App;
