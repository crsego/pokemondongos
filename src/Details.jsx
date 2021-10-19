import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    this.state = { loading: true, pokemon: {} };
  }

  async componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ loading: false, pokemon: json });
      });
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    return (
      <div className="details">
        <h1 className="name">{this.state.pokemon.name}</h1>
        <img
          className="poke-img"
          src={this.state.pokemon.sprites.other.dream_world.front_default}
          alt={this.state.pokemon.name}
        />
        <div className="type">
          <h2 className="title">Tipo:</h2>
          <div className="types">
            {this.state.pokemon.types.map((type, index) => (
              <a key={index} href={`/type/${type.type.name}`}>
                <h3 className="type-name">{type.type.name}</h3>
              </a>
            ))}
          </div>
        </div>
        <div className="info">
          <div className="info-list">
            <h2>Experiencia</h2>
            <p>{this.state.pokemon.base_experience}</p>
            <h2>Indice de Juego</h2>
            <select className="select-custom">
              {this.state.pokemon.game_indices.map((indice, index) => (
                <option key={index} className="options">
                  {indice.version.name}
                </option>
              ))}
            </select>
          </div>
          <div className="info-list">
            <h2>Abilidades</h2>
            {this.state.pokemon.abilities.map((abili, index) => (
              <p key={index}>{abili.ability.name}</p>
            ))}
          </div>
          <div className="info-list">
            <h2>Movimientos</h2>
            <select className="select-custom">
              {this.state.pokemon.moves.map((mov, index) => (
                <option key={index} className="options">
                  {mov.move.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
