import { Component } from "react";
import { withRouter } from "react-router";
import PokemonList from "./Pokemons";

class Type extends Component {
  state = { loading: true, type: {} };

  async componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/type/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ loading: false, type: json });
      });
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }
    return (
      <div className="details">
        <h1 className="name">{this.state.type.name}</h1>
        <h2 className="title">Relaciones De Daño</h2>
        <div className=" ">
          <section className="damages">
            <h3 className="damage-type">Daño Obtenido</h3>
            <div className="table-damage">
              <h4>Doble De:</h4>
              {this.state.type.damage_relations.double_damage_from.map(
                (dam, index) => (
                  <a
                    key={index}
                    className="a-damage"
                    href={`/type/${dam.name}`}
                  >
                    {dam.name}
                  </a>
                )
              )}
            </div>
            <div className="table-damage">
              <h4>Medio De:</h4>
              {this.state.type.damage_relations.half_damage_from.map(
                (dam, index) => (
                  <a
                    key={index}
                    className="a-damage"
                    href={`/type/${dam.name}`}
                  >
                    {dam.name}
                  </a>
                )
              )}
            </div>
            <div className="table-damage">
              <h4>Ninguno De:</h4>
              {this.state.type.damage_relations.no_damage_from.map(
                (dam, index) => (
                  <a
                    key={index}
                    className="a-damage"
                    href={`/type/${dam.name}`}
                  >
                    {dam.name}
                  </a>
                )
              )}
            </div>
          </section>
          <section className="damages">
            <h3 className="damage-type">Daño Dado</h3>
            <div className="table-damage">
              <h4>Doble A:</h4>
              {this.state.type.damage_relations.double_damage_to.map(
                (dam, index) => (
                  <a
                    key={index}
                    className="a-damage"
                    href={`/type/${dam.name}`}
                  >
                    {dam.name}
                  </a>
                )
              )}
            </div>
            <div className="table-damage">
              <h4>Medio A:</h4>
              {this.state.type.damage_relations.half_damage_to.map(
                (dam, index) => (
                  <a
                    key={index}
                    className="a-damage"
                    href={`/type/${dam.name}`}
                  >
                    {dam.name}
                  </a>
                )
              )}
            </div>
            <div className="table-damage">
              <h4>Ninguno A:</h4>
              {this.state.type.damage_relations.no_damage_to.map(
                (dam, index) => (
                  <a
                    key={index}
                    className="a-damage"
                    href={`/type/${dam.name}`}
                  >
                    {dam.name}
                  </a>
                )
              )}
            </div>
          </section>
        </div>
        <h2 className="title">Movimientos</h2>
        <div className="type-moves">
          {this.state.type.moves.map((mov, index) => (
            <h4 key={index} className="move-name">
              {mov.name} ,
            </h4>
          ))}
        </div>
        <h2 className="title">Pokemones Tipo {this.state.type.name}</h2>
        <div className="pokes">
          {this.state.type.pokemon.map((poke, index) => (
            <a
              key={index}
              className="a-pokes"
              href={`/details/${poke.pokemon.name}`}
            >
              {poke.pokemon.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
export default withRouter(Type);
