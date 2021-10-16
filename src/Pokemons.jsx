import { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokeList, setPokeList] = useState([]);
  const [next, setNext] = useState("");

  useEffect(() => {
    requestPokeList();
  }, []);

  async function requestPokeList() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const json = await res.json();

    const promiseArray = await json.results.map((poke) =>
      fetch(poke.url).then((respu) => respu.json())
    );

    const res1 = await Promise.all(promiseArray);
    setPokeList(res1);
    setNext(json.next);
    console.log(json);
  }

  async function requestNewPage() {
    const res = await fetch(next);
    const json = await res.json();

    const promiseArray = await json.results.map((poke) =>
      fetch(poke.url).then((respu) => respu.json())
    );

    const res2 = await Promise.all(promiseArray);
    setNext(json.next);
    const res3 = pokeList.concat(res2);
    setPokeList(res3);
  }

  return (
    <div className="home">
      <div className="pokemon-list">
        {pokeList.map((poke, index) => (
          <a href={`/details/${poke.id}`} className="a-list" key={index}>
            <section className="pokemon">
              <h1 className="name">
                #{poke.id} {poke.name}
              </h1>
              <img
                className="poke-img-home"
                src={poke.sprites.other.dream_world.front_default}
                alt={poke.name}
              />
              <div className="type">
                <h2 className="title">Tipo:</h2>
                <div className="types">
                  {poke.types.map((type, index) => (
                    <a key={index} href={`/type/${type.type.name}`}>
                      <h3 className="type-name">{type.type.name}</h3>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </a>
        ))}
      </div>
      <button onClick={requestNewPage} className="bttnMore">
        Cargar mas
      </button>
    </div>
  );
};
export default PokemonList;
