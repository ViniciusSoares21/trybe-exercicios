import React from 'react';
import './App.css';
import pokemons from './data';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      filter: ''
    }
  }

  getFilterValue = (event) => {
    this.setState ({
      filter: event.target.value
    });
  }

render() {
  const { filter } = this.state;

  const filterPokemons = pokemons.filter((pokemonItem) => {
    const pokemon = pokemonItem.name;
    return pokemon.includes(filter)
  })

  const renderListHtml = filterPokemons.map((pokemonItem) => {
    return <div className='pokemon' key={ pokemonItem.name}>
      <div>
      <p>{pokemonItem.name}</p>
      <p>{pokemonItem.type}</p>
      <p>
      {`Average weight: ${pokemonItem.averageWeight.value} 
      ${pokemonItem.averageWeight.measurementUnit}`}
      </p>
      </div>
      <img src={ pokemonItem.image } alt={`${pokemonItem.name} vini`} /> 
      
    </div>
  });

  return (
    <main>
      <header> 
      <h1> Pokedex </h1>
      <input onChange={this.getFilterValue} type="text" />
      </header>
      <div className='pokedex'>
        { renderListHtml }
      </div>
    </main>
  );
}

}

export default App;
