import { useEffect, useState } from 'react';
import './App.css';
import axiosConfig from './axios/axiosConfig';
import useAxios from './hooks/useAxios';



function App() {
  const [listaPokemon, loading, error] = useAxios({
    axiosConfig: axiosConfig,
    method: 'GET',
    url: 'pokemon',
  });

  console.log(listaPokemon.data, loading, error);

  if (loading) return <><p>Carregando...</p></>;
  if (error) return <><p>{error}</p></>;

  return (
    <div className="App">
      <h1>Axios Pokemon</h1>
      <div>
        {listaPokemon.results.map((pokemon, index) => (
          <div key={index}>
            <p>{pokemon.name}</p>
            <p>
              {pokemon.url}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
