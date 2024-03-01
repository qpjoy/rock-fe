import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React, { useState } from "react";

import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const fakePokemonList = {
  count: 1281,
  next: "https://pokeapi.co/api/v2/pokemon?offset=9&limit=9",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/",
    },
  ],
};

const fakePokemonDetailData = {
  id: 1,
  name: "bulbasaur",
  height: 7,
  weight: 70,
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12" },
    },
  ],
};

const simulateLoading = () => {
  return new Promise((resolve) => setTimeout(resolve, 5000));
};

const api: any = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  // baseQuery: async (url) => {
  //   const result = await fetch(url);
  //   if(result.ok) {
  //     const data = await result.json();
  //     return { data}
  //   } else {
  //     return {
  //       error: "Something went wrong"
  //     }
  //   }
  // },
  endpoints: (build) => ({
    pokemonList: build.query({
      query() {
        return {
          url: "https://pokeapi.co/api/v2/pokemon",
          // ?limit=9
          params: {
            limit: 9,
          },
          method: "GET",
          header: {},
        };
      },

      // async queryFn() {
      //   const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
      //   if(result.ok) {
      //     const data = await result.json();
      //     return { data}
      //   } else {
      //     return {
      //       error: "Something went wrong"
      //     }
      //   }
      // }
    }),
    pokemonDetail: build.query({
      query({ name }) {
        return `https://pokeapi.co/api/v2/pokemon/${name}`;
      },
    }),
  }),
});

const { usePokemonListQuery, usePokemonDetailQuery } = api;

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

function PokemonList({ onPokemonSelected }) {
  // const data = fakePokemonList;
  const { data, isLoading, isError, isSuccess, isUninitialized } =
    usePokemonListQuery();

  if (isUninitialized || isLoading) return "Loading...";
  if (isError) return "Something went wrong";
  return (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => onPokemonSelected(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ol>
    </article>
  );
}

function PokemonDetails({ pokemonName }) {
  // const data = fakePokemonDetailData;
  const { data, isLoading, isError, isSuccess } = usePokemonDetailQuery({
    name: pokemonName,
  });
  if (isLoading) return "Loading....";
  if (isError) return "Something went wrong.";
  if (isSuccess)
    return (
      <article>
        <h2>{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} />
        <ul>
          <li>id: {data.id}</li>
          <li>height: {data.height}</li>
          <li>weight: {data.weight}</li>
          <li>types:</li>
        </ul>
      </article>
    );
}

function PokemonRedux() {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  return (
    <>
      <Provider store={store}>
        {/* <ApiProvider api={api}> */}
        <header>
          <h1>My Pokedex</h1>
        </header>
        {selectedPokemon ? (
          <>
            <PokemonDetails pokemonName={selectedPokemon} />
            <button onClick={() => setSelectedPokemon(undefined)}>Back</button>
          </>
        ) : (
          <PokemonList onPokemonSelected={setSelectedPokemon} />
        )}
        {/* </ApiProvider> */}
      </Provider>
    </>
  );
}

export default PokemonRedux;
// https://egghead.io/lessons/redux-course-introduction-and-application-walk-through-for-rtk-query-basics
