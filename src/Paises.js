import React from "react";
import axios from "axios";
class Paises extends React.Component {
  state = {
    paises: [],
  };
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name")
      .then((response) => {
        this.setState({ paises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <select name="paises" className="form-control">
          {this.state.paises.map((elemento) => (
            <option>{elemento.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Paises;
